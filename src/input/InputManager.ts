import { CarInput } from '../entities/Car';

export class InputManager {
    private keys: { [key: string]: boolean } = {};
    private gamepadIndex: number | null = null;
    private touchInput = {
        steering: 0,
        throttle: 0,
        brake: false,
        nitro: false
    };

    init() {
        this.setupKeyboardListeners();
        this.setupGamepadListeners();
        this.setupTouchListeners();
    }

    private setupKeyboardListeners() {
        document.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
        });

        document.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
    }

    private setupGamepadListeners() {
        window.addEventListener('gamepadconnected', (event) => {
            console.log('Gamepad connected:', event.gamepad.id);
            this.gamepadIndex = event.gamepad.index;
        });

        window.addEventListener('gamepaddisconnected', (event) => {
            console.log('Gamepad disconnected:', event.gamepad.id);
            if (this.gamepadIndex === event.gamepad.index) {
                this.gamepadIndex = null;
            }
        });
    }

    private setupTouchListeners() {
        // Touch controls are handled in UIManager
        // This method can be extended for more complex touch input
    }

    getInput(): CarInput {
        const input: CarInput = {
            throttle: 0,
            brake: 0,
            steering: 0,
            nitro: false
        };

        // Keyboard input
        if (this.keys['ArrowUp'] || this.keys['KeyW']) {
            input.throttle = 1;
        }
        if (this.keys['ArrowDown'] || this.keys['KeyS']) {
            input.brake = 1;
        }
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            input.steering = -1;
        }
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            input.steering = 1;
        }
        if (this.keys['Space'] || this.keys['ShiftLeft']) {
            input.nitro = true;
        }

        // Gamepad input
        if (this.gamepadIndex !== null) {
            const gamepad = navigator.getGamepads()[this.gamepadIndex];
            if (gamepad) {
                // Right trigger for throttle
                input.throttle = Math.max(input.throttle, gamepad.buttons[7]?.value || 0);
                
                // Left trigger for brake
                input.brake = Math.max(input.brake, gamepad.buttons[6]?.value || 0);
                
                // Left stick for steering
                input.steering = gamepad.axes[0] || input.steering;
                
                // A button for nitro
                if (gamepad.buttons[0]?.pressed) {
                    input.nitro = true;
                }
            }
        }

        // Touch input (mobile)
        input.steering = Math.max(-1, Math.min(1, input.steering + this.touchInput.steering));
        input.throttle = Math.max(input.throttle, this.touchInput.throttle);
        if (this.touchInput.brake) input.brake = 1;
        if (this.touchInput.nitro) input.nitro = true;

        return input;
    }

    updateTouchInput(steering: number, throttle: number, brake: boolean, nitro: boolean) {
        this.touchInput.steering = steering;
        this.touchInput.throttle = throttle;
        this.touchInput.brake = brake;
        this.touchInput.nitro = nitro;
    }

    isKeyPressed(key: string): boolean {
        return this.keys[key] || false;
    }

    hasGamepad(): boolean {
        return this.gamepadIndex !== null;
    }
}