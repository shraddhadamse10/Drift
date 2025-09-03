import * as THREE from 'three';
import { PhysicsWorld } from './PhysicsWorld';

export interface TrackData {
    name: string;
    location: string;
    length: number;
    difficulty: string;
    weather: string;
    timeOfDay: string;
}

export class TrackManager {
    private scene: THREE.Scene;
    private physicsWorld: PhysicsWorld;
    private currentTrack: TrackData | null = null;
    private trackMesh: THREE.Group | null = null;
    private checkpoints: THREE.Vector3[] = [];
    private ramps: THREE.Mesh[] = [];

    private tracks: { [key: string]: TrackData } = {
        'nevada-desert': {
            name: 'Nevada Desert',
            location: 'Nevada, USA',
            length: 2.8,
            difficulty: 'Medium',
            weather: 'Clear',
            timeOfDay: 'Day'
        },
        'tokyo-streets': {
            name: 'Tokyo Neon',
            location: 'Tokyo, Japan',
            length: 2.1,
            difficulty: 'Hard',
            weather: 'Rain',
            timeOfDay: 'Night'
        },
        'barcelona-coast': {
            name: 'Barcelona Coast',
            location: 'Barcelona, Spain',
            length: 3.2,
            difficulty: 'Easy',
            weather: 'Sunny',
            timeOfDay: 'Sunset'
        }
    };

    constructor(scene: THREE.Scene, physicsWorld: PhysicsWorld) {
        this.scene = scene;
        this.physicsWorld = physicsWorld;
    }

    async init() {
        // Initialize track manager
    }

    async loadTrack(trackId: string): Promise<void> {
        if (!this.tracks[trackId]) {
            throw new Error(`Track ${trackId} not found`);
        }

        // Clear existing track
        this.clearTrack();

        this.currentTrack = this.tracks[trackId];
        
        // Generate track based on ID
        switch (trackId) {
            case 'nevada-desert':
                this.generateNevadaDesert();
                break;
            case 'tokyo-streets':
                this.generateTokyoStreets();
                break;
            case 'barcelona-coast':
                this.generateBarcelonaCoast();
                break;
        }

        // Setup environment
        this.setupEnvironment();
    }

    private generateNevadaDesert() {
        this.trackMesh = new THREE.Group();
        
        // Create main track surface
        const trackGeometry = new THREE.PlaneGeometry(1000, 1000);
        const trackMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x8B7355,
            map: this.createAsphaltTexture()
        });
        const trackSurface = new THREE.Mesh(trackGeometry, trackMaterial);
        trackSurface.rotation.x = -Math.PI / 2;
        trackSurface.receiveShadow = true;
        this.trackMesh.add(trackSurface);

        // Add desert rocks and cacti
        this.addDesertProps();
        
        // Create massive jumps
        this.createJumpRamps();
        
        // Add checkpoints
        this.setupCheckpoints();
        
        this.scene.add(this.trackMesh);
    }

    private generateTokyoStreets() {
        this.trackMesh = new THREE.Group();
        
        // Create urban track with buildings
        const trackGeometry = new THREE.PlaneGeometry(800, 800);
        const trackMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x2C2C2C,
            map: this.createUrbanTexture()
        });
        const trackSurface = new THREE.Mesh(trackGeometry, trackMaterial);
        trackSurface.rotation.x = -Math.PI / 2;
        trackSurface.receiveShadow = true;
        this.trackMesh.add(trackSurface);

        // Add neon-lit buildings
        this.addTokyoBuildings();
        
        // Create tight corners and elevation changes
        this.createUrbanObstacles();
        
        this.scene.add(this.trackMesh);
    }

    private generateBarcelonaCoast() {
        this.trackMesh = new THREE.Group();
        
        // Create coastal track
        const trackGeometry = new THREE.PlaneGeometry(1200, 600);
        const trackMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x4A4A4A,
            map: this.createCoastalTexture()
        });
        const trackSurface = new THREE.Mesh(trackGeometry, trackMaterial);
        trackSurface.rotation.x = -Math.PI / 2;
        trackSurface.receiveShadow = true;
        this.trackMesh.add(trackSurface);

        // Add palm trees and beach elements
        this.addCoastalProps();
        
        this.scene.add(this.trackMesh);
    }

    private createAsphaltTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        
        // Create asphalt pattern
        ctx.fillStyle = '#3C3C3C';
        ctx.fillRect(0, 0, 512, 512);
        
        // Add road markings
        ctx.strokeStyle = '#FFFF00';
        ctx.lineWidth = 4;
        ctx.setLineDash([20, 20]);
        ctx.beginPath();
        ctx.moveTo(256, 0);
        ctx.lineTo(256, 512);
        ctx.stroke();
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        
        return texture;
    }

    private createUrbanTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        
        ctx.fillStyle = '#2C2C2C';
        ctx.fillRect(0, 0, 512, 512);
        
        // Add street markings
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        for (let i = 0; i < 512; i += 64) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 512);
            ctx.stroke();
        }
        
        return new THREE.CanvasTexture(canvas);
    }

    private createCoastalTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        
        ctx.fillStyle = '#4A4A4A';
        ctx.fillRect(0, 0, 512, 512);
        
        return new THREE.CanvasTexture(canvas);
    }

    private addDesertProps() {
        // Add cacti
        for (let i = 0; i < 20; i++) {
            const cactus = this.createCactus();
            cactus.position.set(
                (Math.random() - 0.5) * 800,
                0,
                (Math.random() - 0.5) * 800
            );
            this.trackMesh!.add(cactus);
        }

        // Add rocks
        for (let i = 0; i < 30; i++) {
            const rock = this.createRock();
            rock.position.set(
                (Math.random() - 0.5) * 900,
                0,
                (Math.random() - 0.5) * 900
            );
            this.trackMesh!.add(rock);
        }
    }

    private addTokyoBuildings() {
        // Create neon-lit skyscrapers
        for (let i = 0; i < 15; i++) {
            const building = this.createBuilding();
            building.position.set(
                (Math.random() - 0.5) * 600,
                Math.random() * 100 + 50,
                (Math.random() - 0.5) * 600
            );
            this.trackMesh!.add(building);
        }
    }

    private addCoastalProps() {
        // Add palm trees
        for (let i = 0; i < 25; i++) {
            const palm = this.createPalmTree();
            palm.position.set(
                (Math.random() - 0.5) * 1000,
                0,
                (Math.random() - 0.5) * 500
            );
            this.trackMesh!.add(palm);
        }
    }

    private createCactus(): THREE.Mesh {
        const geometry = new THREE.CylinderGeometry(1, 2, 8, 8);
        const material = new THREE.MeshLambertMaterial({ color: 0x2D5016 });
        return new THREE.Mesh(geometry, material);
    }

    private createRock(): THREE.Mesh {
        const geometry = new THREE.SphereGeometry(Math.random() * 3 + 1, 8, 6);
        const material = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
        return new THREE.Mesh(geometry, material);
    }

    private createBuilding(): THREE.Mesh {
        const width = Math.random() * 20 + 10;
        const height = Math.random() * 80 + 40;
        const depth = Math.random() * 20 + 10;
        
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshLambertMaterial({ 
            color: new THREE.Color().setHSL(0.6, 0.8, 0.3)
        });
        
        const building = new THREE.Mesh(geometry, material);
        building.castShadow = true;
        return building;
    }

    private createPalmTree(): THREE.Mesh {
        const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.8, 12, 8);
        const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        
        const leavesGeometry = new THREE.SphereGeometry(4, 8, 6);
        const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 8;
        
        const palm = new THREE.Group();
        palm.add(trunk);
        palm.add(leaves);
        
        return palm as any;
    }

    private createJumpRamps() {
        // Create massive jump ramps for Nevada
        for (let i = 0; i < 5; i++) {
            const ramp = this.createRamp();
            ramp.position.set(
                (Math.random() - 0.5) * 400,
                0,
                (Math.random() - 0.5) * 400
            );
            ramp.rotation.y = Math.random() * Math.PI * 2;
            this.ramps.push(ramp);
            this.trackMesh!.add(ramp);
        }
    }

    private createRamp(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(20, 2, 40);
        const material = new THREE.MeshLambertMaterial({ color: 0x666666 });
        const ramp = new THREE.Mesh(geometry, material);
        ramp.rotation.x = -Math.PI / 8; // 22.5 degree angle
        ramp.castShadow = true;
        return ramp;
    }

    private createUrbanObstacles() {
        // Add barriers and tight corners for Tokyo
        for (let i = 0; i < 10; i++) {
            const barrier = this.createBarrier();
            barrier.position.set(
                (Math.random() - 0.5) * 300,
                1,
                (Math.random() - 0.5) * 300
            );
            this.trackMesh!.add(barrier);
        }
    }

    private createBarrier(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(2, 2, 10);
        const material = new THREE.MeshLambertMaterial({ color: 0xFF4444 });
        const barrier = new THREE.Mesh(geometry, material);
        barrier.castShadow = true;
        return barrier;
    }

    private setupCheckpoints() {
        // Create a circular track with checkpoints
        const radius = 200;
        const checkpointCount = 8;
        
        for (let i = 0; i < checkpointCount; i++) {
            const angle = (i / checkpointCount) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            this.checkpoints.push(new THREE.Vector3(x, 5, z));
            
            // Create visual checkpoint
            const checkpointGeometry = new THREE.RingGeometry(8, 12, 16);
            const checkpointMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x00FF00,
                transparent: true,
                opacity: 0.7,
                side: THREE.DoubleSide
            });
            const checkpoint = new THREE.Mesh(checkpointGeometry, checkpointMaterial);
            checkpoint.position.set(x, 5, z);
            checkpoint.rotation.x = Math.PI / 2;
            this.trackMesh!.add(checkpoint);
        }
    }

    private setupEnvironment() {
        if (!this.currentTrack) return;

        // Setup skybox based on track
        this.createSkybox();
        
        // Setup lighting based on time of day
        this.setupLighting();
        
        // Setup weather effects
        this.setupWeather();
    }

    private createSkybox() {
        const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
        const skyMaterial = new THREE.MeshBasicMaterial({
            color: this.getSkyColor(),
            side: THREE.BackSide
        });
        const skybox = new THREE.Mesh(skyGeometry, skyMaterial);
        this.scene.add(skybox);
    }

    private getSkyColor(): number {
        if (!this.currentTrack) return 0x87CEEB;
        
        switch (this.currentTrack.timeOfDay) {
            case 'Night': return 0x191970;
            case 'Sunset': return 0xFF6347;
            default: return 0x87CEEB;
        }
    }

    private setupLighting() {
        // Adjust lighting based on time of day
        const existingLights = this.scene.children.filter((child: THREE.Object3D) => child instanceof THREE.Light);
        existingLights.forEach((light: THREE.Light) => {
            if (light instanceof THREE.DirectionalLight) {
                switch (this.currentTrack?.timeOfDay) {
                    case 'Night':
                        light.intensity = 0.2;
                        light.color.setHex(0x4169E1);
                        break;
                    case 'Sunset':
                        light.intensity = 0.8;
                        light.color.setHex(0xFF6347);
                        break;
                    default:
                        light.intensity = 1.0;
                        light.color.setHex(0xFFFFFF);
                }
            }
        });
    }

    private setupWeather() {
        if (this.currentTrack?.weather === 'Rain') {
            this.createRainEffect();
        }
    }

    private createRainEffect() {
        const rainGeometry = new THREE.BufferGeometry();
        const rainCount = 1000;
        const positions = new Float32Array(rainCount * 3);
        
        for (let i = 0; i < rainCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 400;
            positions[i + 1] = Math.random() * 100 + 50;
            positions[i + 2] = (Math.random() - 0.5) * 400;
        }
        
        rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const rainMaterial = new THREE.PointsMaterial({
            color: 0x87CEEB,
            size: 0.5,
            transparent: true,
            opacity: 0.6
        });
        
        const rain = new THREE.Points(rainGeometry, rainMaterial);
        this.scene.add(rain);
    }

    private clearTrack() {
        if (this.trackMesh) {
            this.scene.remove(this.trackMesh);
            this.trackMesh = null;
        }
        this.checkpoints = [];
        this.ramps = [];
    }

    getCurrentTrack(): TrackData | null {
        return this.currentTrack;
    }

    getCheckpoints(): THREE.Vector3[] {
        return this.checkpoints;
    }

    getRamps(): THREE.Mesh[] {
        return this.ramps;
    }

    isOnRamp(position: THREE.Vector3): boolean {
        return this.ramps.some(ramp => {
            const distance = position.distanceTo(ramp.position);
            return distance < 15;
        });
    }
}