import { Howl, Howler } from 'howler';

export class AudioManager {
    private sounds: { [key: string]: Howl } = {};
    private musicVolume = 0.7;
    private sfxVolume = 0.8;
    private currentMusic: Howl | null = null;
    private engineSounds: { [key: string]: Howl } = {};

    async init() {
        // Initialize audio system
        Howler.volume(1.0);
        
        // Load menu music
        this.sounds.menuMusic = new Howl({
            src: ['https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'],
            loop: true,
            volume: this.musicVolume,
            onloaderror: () => {
                console.log('Menu music failed to load, using silence');
            }
        });

        // Load race music
        this.sounds.raceMusic = new Howl({
            src: ['https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'],
            loop: true,
            volume: this.musicVolume,
            onloaderror: () => {
                console.log('Race music failed to load, using silence');
            }
        });

        // Load sound effects
        this.loadSoundEffects();
        this.loadEngineSounds();
    }

    private loadSoundEffects() {
        const soundEffects = [
            'countdownBeep',
            'lapComplete',
            'raceStart',
            'nitroActivate',
            'crash',
            'stunt',
            'menuSelect',
            'menuHover'
        ];

        soundEffects.forEach(effect => {
            this.sounds[effect] = new Howl({
                src: [`/audio/${effect}.wav`],
                volume: this.sfxVolume,
                onloaderror: () => {
                    // Create a silent placeholder
                    this.sounds[effect] = new Howl({
                        src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT']
                    });
                }
            });
        });
    }

    private loadEngineSounds() {
        const carModels = ['mclaren-p1', 'ferrari-458', 'lamborghini-huracan', 'bugatti-veyron', 'koenigsegg-one'];
        
        carModels.forEach(model => {
            this.engineSounds[model] = new Howl({
                src: [`/audio/engines/${model}.wav`],
                loop: true,
                volume: 0.6,
                onloaderror: () => {
                    // Create a silent placeholder
                    this.engineSounds[model] = new Howl({
                        src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT']
                    });
                }
            });
        });
    }

    playMenuMusic() {
        this.stopCurrentMusic();
        this.currentMusic = this.sounds.menuMusic;
        if (this.currentMusic) {
            this.currentMusic.play();
        }
    }

    playRaceMusic() {
        this.stopCurrentMusic();
        this.currentMusic = this.sounds.raceMusic;
        if (this.currentMusic) {
            this.currentMusic.play();
        }
    }

    stopRaceMusic() {
        if (this.currentMusic) {
            this.currentMusic.stop();
        }
    }

    pauseRaceMusic() {
        if (this.currentMusic) {
            this.currentMusic.pause();
        }
    }

    resumeRaceMusic() {
        if (this.currentMusic) {
            this.currentMusic.play();
        }
    }

    private stopCurrentMusic() {
        if (this.currentMusic) {
            this.currentMusic.stop();
        }
    }

    playCountdownBeep() {
        this.playSound('countdownBeep');
    }

    playLapComplete() {
        this.playSound('lapComplete');
    }

    playRaceStart() {
        this.playSound('raceStart');
    }

    playNitroActivate() {
        this.playSound('nitroActivate');
    }

    playCrash(intensity: number = 1) {
        const sound = this.sounds.crash;
        if (sound) {
            sound.volume(this.sfxVolume * intensity);
            sound.play();
        }
    }

    playStunt() {
        this.playSound('stunt');
    }

    playMenuSelect() {
        this.playSound('menuSelect');
    }

    playMenuHover() {
        this.playSound('menuHover');
    }

    playEngineSound(carModel: string, rpm: number) {
        const engineSound = this.engineSounds[carModel];
        if (engineSound) {
            const pitch = 0.5 + (rpm / 8000) * 1.5; // Adjust pitch based on RPM
            engineSound.rate(pitch);
            if (!engineSound.playing()) {
                engineSound.play();
            }
        }
    }

    stopEngineSound(carModel: string) {
        const engineSound = this.engineSounds[carModel];
        if (engineSound) {
            engineSound.stop();
        }
    }

    private playSound(soundName: string) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.play();
        }
    }

    setMusicVolume(volume: number) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        if (this.currentMusic) {
            this.currentMusic.volume(this.musicVolume);
        }
    }

    setSFXVolume(volume: number) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
        Object.values(this.sounds).forEach(sound => {
            if (sound !== this.currentMusic) {
                sound.volume(this.sfxVolume);
            }
        });
    }

    getMusicVolume(): number {
        return this.musicVolume;
    }

    getSFXVolume(): number {
        return this.sfxVolume;
    }
}