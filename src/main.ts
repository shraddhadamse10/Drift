import { GameEngine } from './core/GameEngine';
import { UIManager } from './ui/UIManager';
import { AudioManager } from './audio/AudioManager';
import { InputManager } from './input/InputManager';
import { GameData } from './data/GameData';
import './styles/main.css';

class AsphaltRacingGame {
    private gameEngine: GameEngine;
    private uiManager: UIManager;
    private audioManager: AudioManager;
    private inputManager: InputManager;
    private gameData: GameData;
    private isInitialized = false;

    constructor() {
        this.gameData = new GameData();
        this.audioManager = new AudioManager();
        this.inputManager = new InputManager();
        this.uiManager = new UIManager(this.gameData, this.audioManager);
        this.gameEngine = new GameEngine(this.gameData, this.audioManager, this.inputManager);
        
        this.init();
    }

    private async init() {
        try {
            // Show loading screen
            this.showLoadingScreen();
            
            // Initialize all systems
            await this.loadAssets();
            await this.audioManager.init();
            this.inputManager.init();
            this.uiManager.init();
            await this.gameEngine.init();
            
            // Setup event listeners
            this.setupEventListeners();
            
            this.isInitialized = true;
            
            // Hide loading screen and show main menu
            this.hideLoadingScreen();
            this.uiManager.showMainMenu();
            
        } catch (error) {
            console.error('Failed to initialize game:', error);
        }
    }

    private showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
            this.animateLoadingProgress();
        }
    }

    private hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }

    private animateLoadingProgress() {
        const progressBar = document.querySelector('.loading-progress') as HTMLElement;
        const loadingText = document.querySelector('.loading-text') as HTMLElement;
        
        if (!progressBar || !loadingText) return;

        const steps = [
            { progress: 20, text: 'Loading 3D Engine...' },
            { progress: 40, text: 'Loading Car Models...' },
            { progress: 60, text: 'Loading Tracks...' },
            { progress: 80, text: 'Loading Audio...' },
            { progress: 100, text: 'Ready to Race!' }
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                progressBar.style.width = `${step.progress}%`;
                loadingText.textContent = step.text;
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, 500);
    }

    private async loadAssets() {
        // Simulate asset loading
        return new Promise(resolve => setTimeout(resolve, 2500));
    }

    private setupEventListeners() {
        // Menu navigation
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const action = target.getAttribute('data-action') || target.closest('[data-action]')?.getAttribute('data-action');
            
            if (action) {
                this.handleMenuAction(action);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'Escape':
                    if (this.gameEngine.isRacing()) {
                        this.uiManager.togglePauseMenu();
                    }
                    break;
                case 'Enter':
                    if (this.uiManager.isMainMenuVisible()) {
                        this.handleMenuAction('quick-race');
                    }
                    break;
            }
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.gameEngine.handleResize();
        });
    }

    private handleMenuAction(action: string) {
        if (!this.isInitialized) return;

        switch (action) {
            case 'career':
                this.uiManager.showCareerScreen();
                break;
            case 'quick-race':
                this.startQuickRace();
                break;
            case 'multiplayer':
                this.uiManager.showMultiplayerScreen();
                break;
            case 'garage':
                this.uiManager.showGarageScreen();
                break;
            case 'settings':
                this.uiManager.showSettingsScreen();
                break;
            case 'back-to-menu':
                this.uiManager.showMainMenu();
                break;
            case 'resume':
                this.uiManager.hidePauseMenu();
                this.gameEngine.resumeRace();
                break;
            case 'restart':
                this.gameEngine.restartRace();
                this.uiManager.hidePauseMenu();
                break;
            case 'quit':
                this.gameEngine.endRace();
                this.uiManager.showMainMenu();
                break;
            case 'retry':
                this.gameEngine.restartRace();
                this.uiManager.hideRaceResults();
                break;
            case 'continue':
                this.uiManager.hideRaceResults();
                this.uiManager.showMainMenu();
                break;
        }
    }

    private async startQuickRace() {
        try {
            this.uiManager.showGameCanvas();
            await this.gameEngine.startRace({
                track: 'nevada-desert',
                mode: 'classic-race',
                laps: 3,
                opponents: 7,
                difficulty: 'normal'
            });
        } catch (error) {
            console.error('Failed to start race:', error);
            this.uiManager.showMainMenu();
        }
    }
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', () => {
    new AsphaltRacingGame();
});