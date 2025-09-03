import { GameData } from '../data/GameData';
import { AudioManager } from '../audio/AudioManager';

export class UIManager {
    private gameData: GameData;
    private audioManager: AudioManager;
    private currentScreen = 'loading';

    constructor(gameData: GameData, audioManager: AudioManager) {
        this.gameData = gameData;
        this.audioManager = audioManager;
    }

    init() {
        this.setupEventListeners();
        this.updatePlayerStats();
        this.populateGarage();
        this.populateCareerMode();
    }

    private setupEventListeners() {
        // Camera mode switching
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyC') {
                // This would cycle camera modes
                console.log('Camera mode switched');
            }
        });

        // Mobile controls
        this.setupMobileControls();
    }

    private setupMobileControls() {
        const steeringWheel = document.getElementById('steering-wheel');
        const brakeBtn = document.getElementById('brake-btn');
        const nitroBtn = document.getElementById('nitro-btn');

        if (steeringWheel) {
            this.setupSteeringWheel(steeringWheel);
        }

        if (brakeBtn) {
            brakeBtn.addEventListener('touchstart', () => {
                // Handle brake input
            });
        }

        if (nitroBtn) {
            nitroBtn.addEventListener('touchstart', () => {
                // Handle nitro input
            });
        }
    }

    private setupSteeringWheel(wheel: HTMLElement) {
        let isDragging = false;
        let startAngle = 0;
        let currentAngle = 0;

        wheel.addEventListener('touchstart', (e) => {
            isDragging = true;
            const touch = e.touches[0];
            const rect = wheel.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            startAngle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX);
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const touch = e.touches[0];
            const rect = wheel.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX);
            
            currentAngle = angle - startAngle;
            wheel.style.transform = `rotate(${currentAngle}rad)`;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
            currentAngle = 0;
            wheel.style.transform = 'rotate(0rad)';
        });
    }

    showMainMenu() {
        this.hideAllScreens();
        const mainMenu = document.getElementById('main-menu');
        if (mainMenu) {
            mainMenu.classList.remove('hidden');
            this.currentScreen = 'main-menu';
        }
        this.audioManager.playMenuMusic();
    }

    showGameCanvas() {
        this.hideAllScreens();
        const gameCanvas = document.getElementById('game-canvas');
        const gameUI = document.getElementById('game-ui');
        
        if (gameCanvas) gameCanvas.classList.remove('hidden');
        if (gameUI) gameUI.classList.remove('hidden');
        
        this.currentScreen = 'game';
        this.showMobileControlsIfNeeded();
    }

    showGarageScreen() {
        this.hideAllScreens();
        const garageScreen = document.getElementById('garage-screen');
        if (garageScreen) {
            garageScreen.classList.remove('hidden');
            this.currentScreen = 'garage';
        }
        this.updateGarageDisplay();
    }

    showCareerScreen() {
        this.hideAllScreens();
        const careerScreen = document.getElementById('career-screen');
        if (careerScreen) {
            careerScreen.classList.remove('hidden');
            this.currentScreen = 'career';
        }
        this.updateCareerProgress();
    }

    showMultiplayerScreen() {
        // For now, just show a coming soon message
        alert('Multiplayer mode coming soon!');
    }

    showSettingsScreen() {
        // For now, just show a coming soon message
        alert('Settings screen coming soon!');
    }

    showRaceResults() {
        const resultsScreen = document.getElementById('race-results');
        if (resultsScreen) {
            resultsScreen.classList.remove('hidden');
        }
    }

    hideRaceResults() {
        const resultsScreen = document.getElementById('race-results');
        if (resultsScreen) {
            resultsScreen.classList.add('hidden');
        }
    }

    togglePauseMenu() {
        const pauseMenu = document.getElementById('pause-menu');
        if (pauseMenu) {
            pauseMenu.classList.toggle('hidden');
        }
    }

    hidePauseMenu() {
        const pauseMenu = document.getElementById('pause-menu');
        if (pauseMenu) {
            pauseMenu.classList.add('hidden');
        }
    }

    private hideAllScreens() {
        const screens = [
            'main-menu', 'garage-screen', 'career-screen', 
            'game-canvas', 'game-ui', 'race-results', 'pause-menu'
        ];
        
        screens.forEach(screenId => {
            const screen = document.getElementById(screenId);
            if (screen) {
                screen.classList.add('hidden');
            }
        });
    }

    private showMobileControlsIfNeeded() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const mobileControls = document.getElementById('mobile-controls');
        
        if (mobileControls) {
            if (isMobile) {
                mobileControls.classList.remove('hidden');
            } else {
                mobileControls.classList.add('hidden');
            }
        }
    }

    private updatePlayerStats() {
        const creditsElement = document.getElementById('player-credits');
        const tokensElement = document.getElementById('player-tokens');
        const leagueElement = document.getElementById('player-league');
        
        if (creditsElement) creditsElement.textContent = this.gameData.getCredits().toLocaleString();
        if (tokensElement) tokensElement.textContent = this.gameData.getTokens().toString();
        if (leagueElement) leagueElement.textContent = this.gameData.getCurrentLeague();
    }

    private populateGarage() {
        const carGrid = document.getElementById('car-grid');
        if (!carGrid) return;

        const ownedCars = this.gameData.getOwnedCars();
        carGrid.innerHTML = '';

        ownedCars.forEach(car => {
            const carCard = this.createCarCard(car);
            carGrid.appendChild(carCard);
        });
    }

    private createCarCard(car: any): HTMLElement {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="car-preview">
                <div class="car-model">${car.name}</div>
                <div class="car-class">${car.class}-Class</div>
            </div>
            <div class="car-stats-mini">
                <div class="stat-mini">
                    <span>Speed</span>
                    <div class="bar-mini">
                        <div class="fill-mini" style="width: ${car.stats.topSpeed}%"></div>
                    </div>
                </div>
                <div class="stat-mini">
                    <span>Accel</span>
                    <div class="bar-mini">
                        <div class="fill-mini" style="width: ${car.stats.acceleration}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            this.selectCar(car);
        });
        
        return card;
    }

    private selectCar(car: any) {
        this.gameData.setSelectedCar(car.id);
        this.updateGarageDisplay();
    }

    private updateGarageDisplay() {
        const selectedCar = this.gameData.getSelectedCar();
        if (!selectedCar) return;

        const carNameElement = document.getElementById('selected-car-name');
        const carClassElement = document.getElementById('selected-car-class');
        
        if (carNameElement) carNameElement.textContent = selectedCar.name;
        if (carClassElement) carClassElement.textContent = `${selectedCar.class}-Class`;
        
        // Update car stats bars
        this.updateCarStatsBars(selectedCar.stats);
    }

    private updateCarStatsBars(stats: any) {
        const statBars = document.querySelectorAll('.stat-bar .fill');
        const statValues = [stats.topSpeed, stats.acceleration, stats.handling, stats.nitroEfficiency];
        
        statBars.forEach((bar, index) => {
            if (index < statValues.length) {
                (bar as HTMLElement).style.width = `${statValues[index]}%`;
            }
        });
    }

    private populateCareerMode() {
        const raceNodes = document.getElementById('race-nodes');
        if (!raceNodes) return;

        const careerData = this.gameData.getCareerProgress();
        raceNodes.innerHTML = '';

        careerData.seasons.forEach((season, seasonIndex) => {
            season.races.forEach((race, raceIndex) => {
                const node = this.createRaceNode(race, seasonIndex, raceIndex);
                raceNodes.appendChild(node);
            });
        });
    }

    private createRaceNode(race: any, seasonIndex: number, raceIndex: number): HTMLElement {
        const node = document.createElement('div');
        node.className = `race-node ${race.completed ? 'completed' : ''} ${race.locked ? 'locked' : ''}`;
        node.style.left = `${(raceIndex % 4) * 25}%`;
        node.style.top = `${seasonIndex * 20 + (raceIndex % 2) * 10}%`;
        
        node.innerHTML = `
            <div class="node-content">
                <div class="race-number">${raceIndex + 1}</div>
                <div class="race-name">${race.name}</div>
                <div class="race-stars">
                    ${this.generateStarsHTML(race.stars)}
                </div>
            </div>
        `;
        
        if (!race.locked) {
            node.addEventListener('click', () => {
                this.startCareerRace(race);
            });
        }
        
        return node;
    }

    private generateStarsHTML(stars: number): string {
        let html = '';
        for (let i = 0; i < 3; i++) {
            if (i < stars) {
                html += '<span class="star earned">⭐</span>';
            } else {
                html += '<span class="star">☆</span>';
            }
        }
        return html;
    }

    private startCareerRace(race: any) {
        // This would start the selected career race
        console.log('Starting career race:', race.name);
    }

    private updateCareerProgress() {
        const progressBar = document.querySelector('.progress-fill') as HTMLElement;
        if (progressBar) {
            const progress = this.gameData.getSeasonProgress();
            progressBar.style.width = `${progress}%`;
        }
    }

    isMainMenuVisible(): boolean {
        return this.currentScreen === 'main-menu';
    }

    getCurrentScreen(): string {
        return this.currentScreen;
    }
}