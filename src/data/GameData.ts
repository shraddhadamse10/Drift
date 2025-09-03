export interface CarData {
    id: string;
    name: string;
    class: string;
    stats: {
        topSpeed: number;
        acceleration: number;
        handling: number;
        nitroEfficiency: number;
    };
    price: number;
    owned: boolean;
    upgrades: {
        engine: number;
        tires: number;
        exhaust: number;
        ecu: number;
    };
}

export interface RaceData {
    id: string;
    name: string;
    track: string;
    type: string;
    laps: number;
    opponents: number;
    difficulty: string;
    completed: boolean;
    locked: boolean;
    stars: number;
    bestTime?: string;
}

export interface SeasonData {
    id: string;
    name: string;
    location: string;
    races: RaceData[];
    completed: boolean;
}

export interface PlayerProgress {
    level: number;
    experience: number;
    credits: number;
    tokens: number;
    currentLeague: string;
    leagueRating: number;
    selectedCarId: string;
}

export class GameData {
    private playerProgress: PlayerProgress;
    private ownedCars: CarData[];
    private careerSeasons: SeasonData[];
    private achievements: any[] = [];

    constructor() {
        this.loadGameData();
    }

    private loadGameData() {
        // Load from localStorage or initialize default data
        const savedData = localStorage.getItem('asphalt-racing-save');
        
        if (savedData) {
            const data = JSON.parse(savedData);
            this.playerProgress = data.playerProgress;
            this.ownedCars = data.ownedCars;
            this.careerSeasons = data.careerSeasons;
            this.achievements = data.achievements || [];
        } else {
            this.initializeDefaultData();
        }
    }

    private initializeDefaultData() {
        this.playerProgress = {
            level: 1,
            experience: 0,
            credits: 50000,
            tokens: 100,
            currentLeague: 'Amateur',
            leagueRating: 1200,
            selectedCarId: 'mclaren-p1'
        };

        this.ownedCars = [
            {
                id: 'mclaren-p1',
                name: 'McLaren P1',
                class: 'S',
                stats: {
                    topSpeed: 95,
                    acceleration: 88,
                    handling: 82,
                    nitroEfficiency: 90
                },
                price: 0,
                owned: true,
                upgrades: {
                    engine: 0,
                    tires: 0,
                    exhaust: 0,
                    ecu: 0
                }
            },
            {
                id: 'ferrari-458',
                name: 'Ferrari 458 Italia',
                class: 'A',
                stats: {
                    topSpeed: 85,
                    acceleration: 82,
                    handling: 88,
                    nitroEfficiency: 85
                },
                price: 0,
                owned: true,
                upgrades: {
                    engine: 0,
                    tires: 0,
                    exhaust: 0,
                    ecu: 0
                }
            },
            {
                id: 'lamborghini-huracan',
                name: 'Lamborghini Huracán',
                class: 'A',
                stats: {
                    topSpeed: 88,
                    acceleration: 85,
                    handling: 80,
                    nitroEfficiency: 88
                },
                price: 0,
                owned: true,
                upgrades: {
                    engine: 0,
                    tires: 0,
                    exhaust: 0,
                    ecu: 0
                }
            }
        ];

        this.careerSeasons = this.generateCareerSeasons();
        this.saveGameData();
    }

    private generateCareerSeasons(): SeasonData[] {
        return [
            {
                id: 'season-1',
                name: 'Nevada Championship',
                location: 'Nevada, USA',
                completed: false,
                races: [
                    {
                        id: 'nevada-1',
                        name: 'Desert Storm',
                        track: 'nevada-desert',
                        type: 'classic-race',
                        laps: 3,
                        opponents: 7,
                        difficulty: 'easy',
                        completed: false,
                        locked: false,
                        stars: 0
                    },
                    {
                        id: 'nevada-2',
                        name: 'Canyon Rush',
                        track: 'nevada-desert',
                        type: 'elimination',
                        laps: 2,
                        opponents: 7,
                        difficulty: 'easy',
                        completed: false,
                        locked: true,
                        stars: 0
                    },
                    {
                        id: 'nevada-3',
                        name: 'Stunt Master',
                        track: 'nevada-desert',
                        type: 'gate-drift',
                        laps: 1,
                        opponents: 0,
                        difficulty: 'medium',
                        completed: false,
                        locked: true,
                        stars: 0
                    },
                    {
                        id: 'nevada-4',
                        name: 'Speed Demon',
                        track: 'nevada-desert',
                        type: 'time-attack',
                        laps: 2,
                        opponents: 0,
                        difficulty: 'medium',
                        completed: false,
                        locked: true,
                        stars: 0
                    }
                ]
            },
            {
                id: 'season-2',
                name: 'Tokyo Nights',
                location: 'Tokyo, Japan',
                completed: false,
                races: [
                    {
                        id: 'tokyo-1',
                        name: 'Neon Streets',
                        track: 'tokyo-streets',
                        type: 'classic-race',
                        laps: 4,
                        opponents: 7,
                        difficulty: 'medium',
                        completed: false,
                        locked: true,
                        stars: 0
                    },
                    {
                        id: 'tokyo-2',
                        name: 'Underground',
                        track: 'tokyo-streets',
                        type: 'knockdown',
                        laps: 3,
                        opponents: 7,
                        difficulty: 'hard',
                        completed: false,
                        locked: true,
                        stars: 0
                    }
                ]
            },
            {
                id: 'season-3',
                name: 'Barcelona Coast',
                location: 'Barcelona, Spain',
                completed: false,
                races: [
                    {
                        id: 'barcelona-1',
                        name: 'Coastal Drive',
                        track: 'barcelona-coast',
                        type: 'classic-race',
                        laps: 3,
                        opponents: 7,
                        difficulty: 'medium',
                        completed: false,
                        locked: true,
                        stars: 0
                    }
                ]
            }
        ];
    }

    saveGameData() {
        const saveData = {
            playerProgress: this.playerProgress,
            ownedCars: this.ownedCars,
            careerSeasons: this.careerSeasons,
            achievements: this.achievements
        };
        
        localStorage.setItem('asphalt-racing-save', JSON.stringify(saveData));
    }

    // Player Progress Methods
    getCredits(): number {
        return this.playerProgress.credits;
    }

    getTokens(): number {
        return this.playerProgress.tokens;
    }

    getCurrentLeague(): string {
        return this.playerProgress.currentLeague;
    }

    getLevel(): number {
        return this.playerProgress.level;
    }

    addCredits(amount: number) {
        this.playerProgress.credits += amount;
        this.saveGameData();
    }

    spendCredits(amount: number): boolean {
        if (this.playerProgress.credits >= amount) {
            this.playerProgress.credits -= amount;
            this.saveGameData();
            return true;
        }
        return false;
    }

    addTokens(amount: number) {
        this.playerProgress.tokens += amount;
        this.saveGameData();
    }

    spendTokens(amount: number): boolean {
        if (this.playerProgress.tokens >= amount) {
            this.playerProgress.tokens -= amount;
            this.saveGameData();
            return true;
        }
        return false;
    }

    addExperience(amount: number) {
        this.playerProgress.experience += amount;
        
        // Check for level up
        const requiredXP = this.playerProgress.level * 1000;
        if (this.playerProgress.experience >= requiredXP) {
            this.playerProgress.level++;
            this.playerProgress.experience -= requiredXP;
            
            // Level up rewards
            this.addCredits(this.playerProgress.level * 500);
            this.addTokens(10);
        }
        
        this.saveGameData();
    }

    // Car Management Methods
    getOwnedCars(): CarData[] {
        return this.ownedCars.filter(car => car.owned);
    }

    getSelectedCar(): CarData | null {
        return this.ownedCars.find(car => car.id === this.playerProgress.selectedCarId) || null;
    }

    setSelectedCar(carId: string) {
        const car = this.ownedCars.find(c => c.id === carId);
        if (car && car.owned) {
            this.playerProgress.selectedCarId = carId;
            this.saveGameData();
        }
    }

    buyCar(carId: string): boolean {
        const car = this.ownedCars.find(c => c.id === carId);
        if (car && !car.owned && this.spendCredits(car.price)) {
            car.owned = true;
            this.saveGameData();
            return true;
        }
        return false;
    }

    upgradeCar(carId: string, upgradeType: keyof CarData['upgrades']): boolean {
        const car = this.ownedCars.find(c => c.id === carId);
        if (!car || !car.owned) return false;
        
        const currentLevel = car.upgrades[upgradeType];
        if (currentLevel >= 5) return false; // Max upgrade level
        
        const upgradeCost = (currentLevel + 1) * 5000;
        if (this.spendCredits(upgradeCost)) {
            car.upgrades[upgradeType]++;
            this.updateCarStats(car);
            this.saveGameData();
            return true;
        }
        
        return false;
    }

    private updateCarStats(car: CarData) {
        // Apply upgrade bonuses to car stats
        const baseStats = this.getBaseCarStats(car.id);
        const upgrades = car.upgrades;
        
        car.stats.topSpeed = baseStats.topSpeed + (upgrades.engine * 2) + (upgrades.ecu * 1);
        car.stats.acceleration = baseStats.acceleration + (upgrades.engine * 2) + (upgrades.exhaust * 1.5);
        car.stats.handling = baseStats.handling + (upgrades.tires * 3);
        car.stats.nitroEfficiency = baseStats.nitroEfficiency + (upgrades.ecu * 1.5);
    }

    private getBaseCarStats(carId: string): CarData['stats'] {
        // Return base stats before upgrades
        const baseStats: { [key: string]: CarData['stats'] } = {
            'mclaren-p1': { topSpeed: 95, acceleration: 88, handling: 82, nitroEfficiency: 90 },
            'ferrari-458': { topSpeed: 85, acceleration: 82, handling: 88, nitroEfficiency: 85 },
            'lamborghini-huracan': { topSpeed: 88, acceleration: 85, handling: 80, nitroEfficiency: 88 }
        };
        
        return baseStats[carId] || baseStats['mclaren-p1'];
    }

    // Career Mode Methods
    getCareerProgress(): { seasons: SeasonData[] } {
        return { seasons: this.careerSeasons };
    }

    completeRace(raceId: string, position: number, time: string): number {
        let starsEarned = 0;
        
        // Find and update race
        for (const season of this.careerSeasons) {
            const race = season.races.find(r => r.id === raceId);
            if (race) {
                race.completed = true;
                race.bestTime = time;
                
                // Calculate stars based on position
                if (position === 1) starsEarned = 3;
                else if (position <= 3) starsEarned = 2;
                else starsEarned = 1;
                
                race.stars = Math.max(race.stars, starsEarned);
                
                // Unlock next race
                const raceIndex = season.races.indexOf(race);
                if (raceIndex < season.races.length - 1) {
                    season.races[raceIndex + 1].locked = false;
                }
                
                break;
            }
        }
        
        this.saveGameData();
        return starsEarned;
    }

    getSeasonProgress(): number {
        const currentSeason = this.careerSeasons[0]; // First season
        const completedRaces = currentSeason.races.filter(race => race.completed).length;
        return (completedRaces / currentSeason.races.length) * 100;
    }

    // League System Methods
    updateLeagueRating(change: number) {
        this.playerProgress.leagueRating += change;
        
        // Check for league promotion/demotion
        this.checkLeagueChange();
        this.saveGameData();
    }

    private checkLeagueChange() {
        const leagues = [
            { name: 'Amateur', minRating: 0 },
            { name: 'Challenger', minRating: 1500 },
            { name: 'Pro', minRating: 2000 },
            { name: 'Champion', minRating: 2500 },
            { name: 'Elite', minRating: 3000 }
        ];
        
        const currentRating = this.playerProgress.leagueRating;
        
        for (let i = leagues.length - 1; i >= 0; i--) {
            if (currentRating >= leagues[i].minRating) {
                this.playerProgress.currentLeague = leagues[i].name;
                break;
            }
        }
    }

    // Achievement System
    checkAchievements(eventType: string, data: any) {
        // Check for various achievements
        switch (eventType) {
            case 'race-complete':
                this.checkRaceAchievements(data);
                break;
            case 'stunt-performed':
                this.checkStuntAchievements(data);
                break;
            case 'car-purchased':
                this.checkCollectionAchievements();
                break;
        }
    }

    private checkRaceAchievements(data: any) {
        // Example achievements
        if (data.position === 1) {
            this.unlockAchievement('first-win', 'First Victory', 'Win your first race');
        }
        
        if (data.perfectRace) {
            this.unlockAchievement('perfect-race', 'Perfect Race', 'Complete a race without crashes');
        }
    }

    private checkStuntAchievements(data: any) {
        if (data.stuntType === 'Flat Spin') {
            this.unlockAchievement('flat-spin-master', 'Flat Spin Master', 'Perform a flat spin');
        }
    }

    private checkCollectionAchievements() {
        const ownedCount = this.getOwnedCars().length;
        if (ownedCount >= 5) {
            this.unlockAchievement('car-collector', 'Car Collector', 'Own 5 different cars');
        }
    }

    private unlockAchievement(id: string, name: string, description: string) {
        if (!this.achievements.find(a => a.id === id)) {
            this.achievements.push({
                id,
                name,
                description,
                unlockedAt: new Date().toISOString()
            });
            
            // Show achievement notification
            this.showAchievementNotification(name);
            this.saveGameData();
        }
    }

    private showAchievementNotification(name: string) {
        // Create achievement popup
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-name">${name}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    getAchievements(): any[] {
        return this.achievements;
    }

    // Utility Methods
    resetProgress() {
        localStorage.removeItem('asphalt-racing-save');
        this.initializeDefaultData();
    }

    exportSaveData(): string {
        return JSON.stringify({
            playerProgress: this.playerProgress,
            ownedCars: this.ownedCars,
            careerSeasons: this.careerSeasons,
            achievements: this.achievements
        }, null, 2);
    }

    importSaveData(saveData: string): boolean {
        try {
            const data = JSON.parse(saveData);
            this.playerProgress = data.playerProgress;
            this.ownedCars = data.ownedCars;
            this.careerSeasons = data.careerSeasons;
            this.achievements = data.achievements || [];
            this.saveGameData();
            return true;
        } catch (error) {
            console.error('Failed to import save data:', error);
            return false;
        }
    }
}