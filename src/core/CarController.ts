import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsWorld } from './PhysicsWorld';
import { InputManager } from '../input/InputManager';
import { Car } from '../entities/Car';

export class CarController {
    private scene: THREE.Scene;
    private physicsWorld: PhysicsWorld;
    private inputManager: InputManager;
    private playerCar: Car | null = null;
    private opponentCars: Car[] = [];
    private cars: Car[] = [];

    constructor(scene: THREE.Scene, physicsWorld: PhysicsWorld, inputManager: InputManager) {
        this.scene = scene;
        this.physicsWorld = physicsWorld;
        this.inputManager = inputManager;
    }

    async init() {
        // Initialize car controller
    }

    async setupRace(opponentCount: number) {
        // Clear existing cars
        this.clearCars();
        
        // Create player car
        this.playerCar = new Car('player', 'mclaren-p1', this.scene, this.physicsWorld);
        await this.playerCar.init();
        this.playerCar.setPosition(new THREE.Vector3(0, 1, 0));
        this.cars.push(this.playerCar);
        
        // Create opponent cars
        for (let i = 0; i < opponentCount; i++) {
            const opponentCar = new Car(`opponent-${i}`, this.getRandomCarModel(), this.scene, this.physicsWorld);
            await opponentCar.init();
            opponentCar.setPosition(new THREE.Vector3((i + 1) * 4, 1, -5));
            this.opponentCars.push(opponentCar);
            this.cars.push(opponentCar);
        }
    }

    update(deltaTime: number) {
        if (!this.playerCar) return;
        
        // Update player car with input
        const input = this.inputManager.getInput();
        this.playerCar.update(deltaTime, input);
        
        // Update opponent cars with AI
        this.opponentCars.forEach(car => {
            const aiInput = this.generateAIInput(car);
            car.update(deltaTime, aiInput);
        });
        
        // Update UI with player car data
        this.updateSpeedDisplay();
        this.updateNitroDisplay();
    }

    private updateSpeedDisplay() {
        if (!this.playerCar) return;
        
        const speedElement = document.getElementById('speed-value');
        if (speedElement) {
            const speed = Math.round(this.playerCar.getSpeed() * 3.6); // Convert m/s to km/h
            speedElement.textContent = speed.toString();
        }
    }

    private updateNitroDisplay() {
        if (!this.playerCar) return;
        
        const nitroFill = document.getElementById('nitro-fill');
        if (nitroFill) {
            const nitroPercentage = this.playerCar.getNitroPercentage();
            nitroFill.style.width = `${nitroPercentage}%`;
        }
    }

    private generateAIInput(car: Car): any {
        // Simple AI that drives forward with occasional steering
        return {
            throttle: 0.8 + Math.random() * 0.2,
            brake: 0,
            steering: (Math.random() - 0.5) * 0.3,
            nitro: Math.random() < 0.1
        };
    }

    private getRandomCarModel(): string {
        const models = ['ferrari-458', 'lamborghini-huracan', 'bugatti-veyron', 'koenigsegg-one'];
        return models[Math.floor(Math.random() * models.length)];
    }

    private clearCars() {
        this.cars.forEach(car => car.dispose());
        this.cars = [];
        this.opponentCars = [];
        this.playerCar = null;
    }

    resetPositions() {
        if (this.playerCar) {
            this.playerCar.setPosition(new THREE.Vector3(0, 1, 0));
            this.playerCar.resetVelocity();
        }
        
        this.opponentCars.forEach((car, index) => {
            car.setPosition(new THREE.Vector3((index + 1) * 4, 1, -5));
            car.resetVelocity();
        });
    }

    getPlayerCar(): Car | null {
        return this.playerCar;
    }

    getAllCars(): Car[] {
        return this.cars;
    }
}