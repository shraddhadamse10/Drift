import { GameData } from '../data/GameData';
import { AudioManager } from '../audio/AudioManager';
import { RaceConfig } from './GameEngine';

export class RaceManager {
    private gameData: GameData;
    private audioManager: AudioManager;
    private raceStartTime = 0;
    private currentLap = 1;
    private totalLaps = 3;
    private racePosition = 1;
    private isCountdownActive = false;
    private raceTime = 0;
    private isRacing = false;

    constructor(gameData: GameData, audioManager: AudioManager) {
        this.gameData = gameData;
        this.audioManager = audioManager;
    }

    async setupRace(config: RaceConfig) {
        this.totalLaps = config.laps;
        this.currentLap = 1;
        this.racePosition = 1;
        this.raceTime = 0;
        
        // Update UI
        this.updateRaceUI();
    }

    async startCountdown() {
        this.isCountdownActive = true;
        
        const countdownSteps = ['3', '2', '1', 'GO!'];
        
        for (let i = 0; i < countdownSteps.length; i++) {
            await this.showCountdownStep(countdownSteps[i]);
            this.audioManager.playCountdownBeep();
            await this.delay(1000);
        }
        
        this.isCountdownActive = false;
        this.raceStartTime = Date.now();
    }

    private async showCountdownStep(text: string) {
        // Create countdown overlay
        let countdownOverlay = document.getElementById('countdown-overlay');
        if (!countdownOverlay) {
            countdownOverlay = document.createElement('div');
            countdownOverlay.id = 'countdown-overlay';
            countdownOverlay.className = 'countdown-overlay';
            document.body.appendChild(countdownOverlay);
        }
        
        countdownOverlay.textContent = text;
        countdownOverlay.style.display = 'flex';
        
        // Animate countdown
        countdownOverlay.style.transform = 'scale(0.5)';
        countdownOverlay.style.opacity = '0';
        
        requestAnimationFrame(() => {
            countdownOverlay!.style.transform = 'scale(1)';
            countdownOverlay!.style.opacity = '1';
        });
        
        if (text === 'GO!') {
            setTimeout(() => {
                countdownOverlay!.style.display = 'none';
            }, 1000);
        }
    }

    update(deltaTime: number) {
        if (this.isCountdownActive) return;
        
        this.raceTime += deltaTime;
        this.updateRaceUI();
        
        // Check for lap completion
        this.checkLapCompletion();
        
        // Check for race completion
        this.checkRaceCompletion();
    }

    private updateRaceUI() {
        // Update race time
        const timeElement = document.getElementById('race-time');
        if (timeElement) {
            timeElement.textContent = this.formatTime(this.raceTime);
        }
        
        // Update lap counter
        const currentLapElement = document.getElementById('current-lap');
        const totalLapsElement = document.getElementById('total-laps');
        if (currentLapElement) currentLapElement.textContent = this.currentLap.toString();
        if (totalLapsElement) totalLapsElement.textContent = this.totalLaps.toString();
        
        // Update position
        const positionElement = document.getElementById('race-position');
        if (positionElement) positionElement.textContent = this.racePosition.toString();
    }

    private formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        const milliseconds = Math.floor((seconds % 1) * 1000);
        
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }

    private checkLapCompletion() {
        // This would check if player has completed a lap
        // For now, simulate lap completion every 60 seconds
        if (Math.floor(this.raceTime / 60) + 1 > this.currentLap && this.currentLap < this.totalLaps) {
            this.currentLap++;
            this.audioManager.playLapComplete();
        }
    }

    private checkRaceCompletion() {
        // Check if race is complete
        if (this.currentLap > this.totalLaps) {
            this.completeRace();
        }
    }

    private completeRace() {
        // Calculate race results
        const results = {
            position: this.racePosition,
            bestLap: this.formatTime(45.123), // Mock best lap time
            creditsEarned: this.calculateCreditsEarned(),
            starsEarned: this.calculateStarsEarned()
        };
        
        // Update game data
        this.gameData.addCredits(results.creditsEarned);
        
        // Show results
        this.showRaceResults(results);
        
        // Stop race
        this.endRace();
    }

    private calculateCreditsEarned(): number {
        const baseCredits = 1000;
        const positionBonus = (9 - this.racePosition) * 500;
        return baseCredits + positionBonus;
    }

    private calculateStarsEarned(): number {
        if (this.racePosition === 1) return 3;
        if (this.racePosition <= 3) return 2;
        return 1;
    }

    private showRaceResults(results: any) {
        const resultsScreen = document.getElementById('race-results');
        if (resultsScreen) {
            resultsScreen.classList.remove('hidden');
            
            // Update results display
            const finalPosition = document.getElementById('final-position');
            const bestLap = document.getElementById('best-lap');
            const creditsEarned = document.getElementById('credits-earned');
            const starsEarned = document.getElementById('stars-earned');
            
            if (finalPosition) finalPosition.textContent = this.getPositionText(results.position);
            if (bestLap) bestLap.textContent = results.bestLap;
            if (creditsEarned) creditsEarned.textContent = `+${results.creditsEarned}`;
            
            // Update stars display
            if (starsEarned) {
                const stars = starsEarned.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    if (index < results.starsEarned) {
                        star.classList.add('earned');
                    } else {
                        star.classList.remove('earned');
                    }
                });
            }
        }
    }

    private getPositionText(position: number): string {
        const suffixes = ['st', 'nd', 'rd'];
        const suffix = suffixes[position - 1] || 'th';
        return `${position}${suffix}`;
    }

    private endRace() {
        this.isRacing = false;
        this.audioManager.stopRaceMusic();
    }

    restart() {
        this.currentLap = 1;
        this.raceTime = 0;
        this.raceStartTime = Date.now();
        this.updateRaceUI();
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}