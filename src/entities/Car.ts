import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsWorld } from '../core/PhysicsWorld';

export interface CarStats {
    topSpeed: number;
    acceleration: number;
    handling: number;
    nitroEfficiency: number;
    weight: number;
}

export interface CarInput {
    throttle: number;
    brake: number;
    steering: number;
    nitro: boolean;
}

export class Car {
    private id: string;
    private model: string;
    private scene: THREE.Scene;
    private physicsWorld: PhysicsWorld;
    private mesh: THREE.Group;
    private body: CANNON.Body;
    private stats: CarStats;
    private nitroAmount = 100;
    private maxNitro = 100;
    private speed = 0;
    private isAirborne = false;
    private airborneTime = 0;
    private stuntMultiplier = 1;
    private lastStuntTime = 0;

    constructor(id: string, model: string, scene: THREE.Scene, physicsWorld: PhysicsWorld) {
        this.id = id;
        this.model = model;
        this.scene = scene;
        this.physicsWorld = physicsWorld;
        this.stats = this.getCarStats(model);
        this.createCarMesh();
        this.createPhysicsBody();
    }

    async init() {
        this.scene.add(this.mesh);
        this.physicsWorld.addBody(this.body);
    }

    private getCarStats(model: string): CarStats {
        const carDatabase: { [key: string]: CarStats } = {
            'mclaren-p1': {
                topSpeed: 350,
                acceleration: 95,
                handling: 82,
                nitroEfficiency: 90,
                weight: 1400
            },
            'ferrari-458': {
                topSpeed: 320,
                acceleration: 88,
                handling: 85,
                nitroEfficiency: 85,
                weight: 1380
            },
            'lamborghini-huracan': {
                topSpeed: 325,
                acceleration: 90,
                handling: 80,
                nitroEfficiency: 88,
                weight: 1422
            },
            'bugatti-veyron': {
                topSpeed: 400,
                acceleration: 98,
                handling: 70,
                nitroEfficiency: 95,
                weight: 1888
            },
            'koenigsegg-one': {
                topSpeed: 450,
                acceleration: 100,
                handling: 75,
                nitroEfficiency: 98,
                weight: 1360
            }
        };

        return carDatabase[model] || carDatabase['mclaren-p1'];
    }

    private createCarMesh() {
        this.mesh = new THREE.Group();
        
        // Create car body
        const bodyGeometry = new THREE.BoxGeometry(4, 1.5, 8);
        const bodyMaterial = new THREE.MeshLambertMaterial({ 
            color: this.getCarColor()
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.75;
        body.castShadow = true;
        this.mesh.add(body);
        
        // Create wheels
        const wheelGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 16);
        const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
        
        const wheelPositions = [
            { x: -1.5, y: 0, z: 2.5 },
            { x: 1.5, y: 0, z: 2.5 },
            { x: -1.5, y: 0, z: -2.5 },
            { x: 1.5, y: 0, z: -2.5 }
        ];
        
        wheelPositions.forEach(pos => {
            const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel.position.set(pos.x, pos.y, pos.z);
            wheel.rotation.z = Math.PI / 2;
            wheel.castShadow = true;
            this.mesh.add(wheel);
        });
        
        // Add spoiler for sports cars
        if (this.stats.topSpeed > 300) {
            const spoilerGeometry = new THREE.BoxGeometry(3, 0.2, 0.5);
            const spoilerMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
            const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
            spoiler.position.set(0, 2, -3.5);
            spoiler.castShadow = true;
            this.mesh.add(spoiler);
        }
    }

    private createPhysicsBody() {
        const shape = new CANNON.Box(new CANNON.Vec3(2, 0.75, 4));
        this.body = new CANNON.Body({ 
            mass: this.stats.weight,
            shape: shape,
            material: new CANNON.Material('car')
        });
        
        this.body.position.set(0, 1, 0);
        this.body.addEventListener('collide', this.handleCollision.bind(this));
    }

    private getCarColor(): number {
        const colors = [0xFF0000, 0x0000FF, 0x00FF00, 0xFFFF00, 0xFF00FF, 0x00FFFF, 0xFFA500, 0x800080];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update(deltaTime: number, input: CarInput) {
        // Apply forces based on input
        this.applyThrottle(input.throttle, deltaTime);
        this.applyBraking(input.brake, deltaTime);
        this.applySteering(input.steering, deltaTime);
        
        if (input.nitro && this.nitroAmount > 0) {
            this.applyNitro(deltaTime);
        } else {
            this.regenerateNitro(deltaTime);
        }
        
        // Update mesh position from physics body
        this.mesh.position.copy(this.body.position as any);
        this.mesh.quaternion.copy(this.body.quaternion as any);
        
        // Calculate speed
        this.speed = this.body.velocity.length();
        
        // Check if airborne
        this.checkAirborneStatus(deltaTime);
        
        // Detect stunts
        this.detectStunts(deltaTime);
    }

    private applyThrottle(throttle: number, deltaTime: number) {
        if (throttle === 0) return;
        
        const force = throttle * this.stats.acceleration * 1000;
        const forwardDirection = new CANNON.Vec3(0, 0, 1);
        this.body.quaternion.vmult(forwardDirection, forwardDirection);
        
        this.body.applyImpulse(
            forwardDirection.scale(force * deltaTime),
            this.body.position
        );
    }

    private applyBraking(brake: number, deltaTime: number) {
        if (brake === 0) return;
        
        const brakeForce = brake * 2000;
        const velocity = this.body.velocity.clone();
        velocity.scale(-brakeForce * deltaTime);
        
        this.body.applyImpulse(velocity, this.body.position);
    }

    private applySteering(steering: number, deltaTime: number) {
        if (steering === 0) return;
        
        const steeringForce = steering * this.stats.handling * 10;
        const torque = new CANNON.Vec3(0, steeringForce * deltaTime, 0);
        
        this.body.applyTorque(torque);
    }

    private applyNitro(deltaTime: number) {
        const nitroForce = 3000;
        const forwardDirection = new CANNON.Vec3(0, 0, 1);
        this.body.quaternion.vmult(forwardDirection, forwardDirection);
        
        this.body.applyImpulse(
            forwardDirection.scale(nitroForce * deltaTime),
            this.body.position
        );
        
        this.nitroAmount -= 50 * deltaTime;
        this.nitroAmount = Math.max(0, this.nitroAmount);
    }

    private regenerateNitro(deltaTime: number) {
        this.nitroAmount += 20 * deltaTime;
        this.nitroAmount = Math.min(this.maxNitro, this.nitroAmount);
    }

    private checkAirborneStatus(deltaTime: number) {
        // Simple airborne detection - check if car is above ground
        const wasAirborne = this.isAirborne;
        this.isAirborne = this.body.position.y > 2;
        
        if (this.isAirborne) {
            this.airborneTime += deltaTime;
        } else {
            if (wasAirborne && this.airborneTime > 0.5) {
                // Landing after significant air time
                this.handleLanding();
            }
            this.airborneTime = 0;
        }
    }

    private detectStunts(deltaTime: number) {
        if (!this.isAirborne || this.airborneTime < 0.3) return;
        
        const angularVelocity = this.body.angularVelocity;
        const rotationSpeed = angularVelocity.length();
        
        if (rotationSpeed > 5 && Date.now() - this.lastStuntTime > 1000) {
            this.performStunt(rotationSpeed);
            this.lastStuntTime = Date.now();
        }
    }

    private performStunt(rotationSpeed: number) {
        let stuntType = 'Barrel Roll';
        let points = 100;
        
        if (rotationSpeed > 10) {
            stuntType = '360°';
            points = 200;
        }
        if (rotationSpeed > 15) {
            stuntType = 'Flat Spin';
            points = 300;
        }
        
        // Show stunt notification
        this.showStuntNotification(stuntType, points * this.stuntMultiplier);
        this.stuntMultiplier = Math.min(this.stuntMultiplier + 0.5, 5);
    }

    private showStuntNotification(stuntType: string, points: number) {
        const stuntDisplay = document.getElementById('stunt-display');
        if (stuntDisplay) {
            const stuntText = stuntDisplay.querySelector('.stunt-text') as HTMLElement;
            const stuntPoints = stuntDisplay.querySelector('.stunt-points') as HTMLElement;
            
            if (stuntText && stuntPoints) {
                stuntText.textContent = stuntType;
                stuntPoints.textContent = `+${points}`;
                
                stuntDisplay.classList.add('active');
                
                setTimeout(() => {
                    stuntDisplay.classList.remove('active');
                }, 2000);
            }
        }
    }

    private handleLanding() {
        // Reset stunt multiplier on landing
        this.stuntMultiplier = 1;
        
        // Add landing effect based on air time
        if (this.airborneTime > 1) {
            // Hard landing - add camera shake
            // This would be handled by the camera controller
        }
    }

    private handleCollision(event: any) {
        const impact = event.contact.getImpactVelocityAlongNormal();
        
        if (Math.abs(impact) > 10) {
            // Significant collision - create crash effect
            // This would trigger effects in the EffectsManager
        }
    }

    setPosition(position: THREE.Vector3) {
        this.body.position.set(position.x, position.y, position.z);
        this.mesh.position.copy(position);
    }

    resetVelocity() {
        this.body.velocity.set(0, 0, 0);
        this.body.angularVelocity.set(0, 0, 0);
    }

    getPosition(): THREE.Vector3 {
        return new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
    }

    getRotation(): THREE.Quaternion {
        return new THREE.Quaternion(this.body.quaternion.x, this.body.quaternion.y, this.body.quaternion.z, this.body.quaternion.w);
    }

    getVelocity(): THREE.Vector3 {
        return new THREE.Vector3(this.body.velocity.x, this.body.velocity.y, this.body.velocity.z);
    }

    getSpeed(): number {
        return this.speed;
    }

    getNitroPercentage(): number {
        return (this.nitroAmount / this.maxNitro) * 100;
    }

    getStats(): CarStats {
        return this.stats;
    }

    getId(): string {
        return this.id;
    }

    getModel(): string {
        return this.model;
    }

    isPlayerCar(): boolean {
        return this.id === 'player';
    }

    dispose() {
        this.scene.remove(this.mesh);
        this.physicsWorld.removeBody(this.body);
    }
}