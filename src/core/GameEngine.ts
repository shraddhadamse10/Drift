import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { RaceManager } from './RaceManager';
import { PhysicsWorld } from './PhysicsWorld';
import { CarController } from './CarController';
import { TrackManager } from './TrackManager';
import { CameraController } from './CameraController';
import { EffectsManager } from './EffectsManager';
import { GameData } from '../data/GameData';
import { AudioManager } from '../audio/AudioManager';
import { InputManager } from '../input/InputManager';

export interface RaceConfig {
    track: string;
    mode: string;
    laps: number;
    opponents: number;
    difficulty: string;
}

export class GameEngine {
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private canvas: HTMLCanvasElement;
    private raceManager: RaceManager;
    private physicsWorld: PhysicsWorld;
    private carController: CarController;
    private trackManager: TrackManager;
    private cameraController: CameraController;
    private effectsManager: EffectsManager;
    private gameData: GameData;
    private audioManager: AudioManager;
    private inputManager: InputManager;
    private isRacing = false;
    private animationId: number | null = null;
    private clock = new THREE.Clock();

    constructor(gameData: GameData, audioManager: AudioManager, inputManager: InputManager) {
        this.gameData = gameData;
        this.audioManager = audioManager;
        this.inputManager = inputManager;
        
        this.canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
        this.setupRenderer();
        this.setupScene();
        this.initializeManagers();
    }

    private setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: 'high-performance'
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
    }

    private setupScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x87CEEB, 100, 1000);
        
        // Add ambient lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(ambientLight);
        
        // Add directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(100, 100, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        this.scene.add(directionalLight);
    }

    private initializeManagers() {
        this.physicsWorld = new PhysicsWorld();
        this.trackManager = new TrackManager(this.scene, this.physicsWorld);
        this.carController = new CarController(this.scene, this.physicsWorld, this.inputManager);
        this.cameraController = new CameraController();
        this.effectsManager = new EffectsManager(this.scene);
        this.raceManager = new RaceManager(this.gameData, this.audioManager);
    }

    async init() {
        await this.trackManager.init();
        await this.carController.init();
        this.cameraController.init(this.scene);
        this.effectsManager.init();
        
        // Setup camera to follow player car
        this.cameraController.setTarget(this.carController.getPlayerCar());
    }

    async startRace(config: RaceConfig) {
        try {
            this.isRacing = true;
            
            // Load track
            await this.trackManager.loadTrack(config.track);
            
            // Setup race
            await this.raceManager.setupRace(config);
            
            // Position cars at starting line
            this.carController.setupRace(config.opponents);
            
            // Start race countdown
            await this.raceManager.startCountdown();
            
            // Begin race loop
            this.startGameLoop();
            
            // Play race music
            this.audioManager.playRaceMusic();
            
        } catch (error) {
            console.error('Failed to start race:', error);
            throw error;
        }
    }

    private startGameLoop() {
        const gameLoop = () => {
            if (!this.isRacing) return;
            
            const deltaTime = this.clock.getDelta();
            
            // Update physics
            this.physicsWorld.step(deltaTime);
            
            // Update car controller
            this.carController.update(deltaTime);
            
            // Update camera
            this.cameraController.update(deltaTime);
            
            // Update effects
            this.effectsManager.update(deltaTime);
            
            // Update race manager
            this.raceManager.update(deltaTime);
            
            // Render scene
            this.renderer.render(this.scene, this.cameraController.getCamera());
            
            this.animationId = requestAnimationFrame(gameLoop);
        };
        
        gameLoop();
    }

    pauseRace() {
        this.isRacing = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.audioManager.pauseRaceMusic();
    }

    resumeRace() {
        this.isRacing = true;
        this.startGameLoop();
        this.audioManager.resumeRaceMusic();
    }

    restartRace() {
        this.pauseRace();
        this.carController.resetPositions();
        this.raceManager.restart();
        this.resumeRace();
    }

    endRace() {
        this.isRacing = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.audioManager.stopRaceMusic();
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        this.cameraController.handleResize(width, height);
    }

    isRacing(): boolean {
        return this.isRacing;
    }

    getScene(): THREE.Scene {
        return this.scene;
    }

    getRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }
}