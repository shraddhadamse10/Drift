import * as THREE from 'three';
import { Car } from '../entities/Car';

export type CameraMode = 'chase' | 'cockpit' | 'cinematic' | 'overhead';

export class CameraController {
    private camera: THREE.PerspectiveCamera;
    private target: Car | null = null;
    private currentMode: CameraMode = 'chase';
    private cameraOffset = new THREE.Vector3(0, 8, -20);
    private lookAtOffset = new THREE.Vector3(0, 2, 0);
    private smoothness = 0.1;
    private shakeIntensity = 0;
    private shakeDecay = 0.95;

    constructor() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
    }

    init(scene: THREE.Scene) {
        scene.add(this.camera);
        this.camera.position.set(0, 10, 20);
        this.camera.lookAt(0, 0, 0);
    }

    setTarget(car: Car | null) {
        this.target = car;
    }

    setCameraMode(mode: CameraMode) {
        this.currentMode = mode;
        this.updateCameraOffset();
    }

    private updateCameraOffset() {
        switch (this.currentMode) {
            case 'chase':
                this.cameraOffset.set(0, 8, -20);
                this.lookAtOffset.set(0, 2, 0);
                this.smoothness = 0.1;
                break;
            case 'cockpit':
                this.cameraOffset.set(0, 1.5, 2);
                this.lookAtOffset.set(0, 1.5, 10);
                this.smoothness = 0.05;
                break;
            case 'cinematic':
                this.cameraOffset.set(-15, 12, -10);
                this.lookAtOffset.set(0, 0, 20);
                this.smoothness = 0.15;
                break;
            case 'overhead':
                this.cameraOffset.set(0, 50, 0);
                this.lookAtOffset.set(0, 0, 0);
                this.smoothness = 0.08;
                break;
        }
    }

    update(deltaTime: number) {
        if (!this.target) return;

        const carPosition = this.target.getPosition();
        const carRotation = this.target.getRotation();
        
        // Calculate desired camera position
        const desiredPosition = new THREE.Vector3();
        const rotatedOffset = this.cameraOffset.clone();
        rotatedOffset.applyQuaternion(carRotation);
        desiredPosition.copy(carPosition).add(rotatedOffset);
        
        // Apply camera shake
        if (this.shakeIntensity > 0) {
            const shake = new THREE.Vector3(
                (Math.random() - 0.5) * this.shakeIntensity,
                (Math.random() - 0.5) * this.shakeIntensity,
                (Math.random() - 0.5) * this.shakeIntensity
            );
            desiredPosition.add(shake);
            this.shakeIntensity *= this.shakeDecay;
        }
        
        // Smooth camera movement
        this.camera.position.lerp(desiredPosition, this.smoothness);
        
        // Calculate look-at position
        const lookAtPosition = new THREE.Vector3();
        const rotatedLookAt = this.lookAtOffset.clone();
        rotatedLookAt.applyQuaternion(carRotation);
        lookAtPosition.copy(carPosition).add(rotatedLookAt);
        
        this.camera.lookAt(lookAtPosition);
        
        // Dynamic FOV based on speed
        const speed = this.target.getSpeed();
        const baseFOV = 75;
        const speedFOV = Math.min(speed * 0.5, 15);
        this.camera.fov = baseFOV + speedFOV;
        this.camera.updateProjectionMatrix();
    }

    addShake(intensity: number) {
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    }

    handleResize(width: number, height: number) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    getCamera(): THREE.PerspectiveCamera {
        return this.camera;
    }

    getCurrentMode(): CameraMode {
        return this.currentMode;
    }
}