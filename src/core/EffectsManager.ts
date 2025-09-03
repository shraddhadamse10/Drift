import * as THREE from 'three';

export class EffectsManager {
    private scene: THREE.Scene;
    private particleSystems: THREE.Points[] = [];
    private explosions: THREE.Group[] = [];
    private nitroTrails: THREE.Group[] = [];

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    init() {
        // Initialize effects manager
    }

    update(deltaTime: number) {
        // Update particle systems
        this.updateParticles(deltaTime);
        
        // Update explosions
        this.updateExplosions(deltaTime);
        
        // Update nitro trails
        this.updateNitroTrails(deltaTime);
    }

    createNitroEffect(position: THREE.Vector3, velocity: THREE.Vector3): THREE.Group {
        const nitroGroup = new THREE.Group();
        
        // Create flame particles
        const flameGeometry = new THREE.BufferGeometry();
        const flameCount = 50;
        const positions = new Float32Array(flameCount * 3);
        const colors = new Float32Array(flameCount * 3);
        const sizes = new Float32Array(flameCount);
        
        for (let i = 0; i < flameCount; i++) {
            const i3 = i * 3;
            
            // Position
            positions[i3] = position.x + (Math.random() - 0.5) * 2;
            positions[i3 + 1] = position.y + Math.random() * 2;
            positions[i3 + 2] = position.z + (Math.random() - 0.5) * 2;
            
            // Color (orange to red gradient)
            const intensity = Math.random();
            colors[i3] = 1.0; // Red
            colors[i3 + 1] = intensity * 0.5; // Green
            colors[i3 + 2] = 0.0; // Blue
            
            // Size
            sizes[i] = Math.random() * 3 + 1;
        }
        
        flameGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        flameGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        flameGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const flameMaterial = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const flames = new THREE.Points(flameGeometry, flameMaterial);
        nitroGroup.add(flames);
        
        this.nitroTrails.push(nitroGroup);
        this.scene.add(nitroGroup);
        
        return nitroGroup;
    }

    createCrashEffect(position: THREE.Vector3, intensity: number): THREE.Group {
        const crashGroup = new THREE.Group();
        
        // Create explosion particles
        const explosionGeometry = new THREE.BufferGeometry();
        const particleCount = Math.floor(intensity * 100);
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Position
            positions[i3] = position.x;
            positions[i3 + 1] = position.y;
            positions[i3 + 2] = position.z;
            
            // Velocity
            const direction = new THREE.Vector3(
                (Math.random() - 0.5) * 2,
                Math.random(),
                (Math.random() - 0.5) * 2
            ).normalize();
            
            velocities[i3] = direction.x * intensity * 20;
            velocities[i3 + 1] = direction.y * intensity * 20;
            velocities[i3 + 2] = direction.z * intensity * 20;
            
            // Color (yellow to red)
            colors[i3] = 1.0;
            colors[i3 + 1] = Math.random() * 0.8;
            colors[i3 + 2] = 0.0;
        }
        
        explosionGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        explosionGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        explosionGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const explosionMaterial = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });
        
        const explosion = new THREE.Points(explosionGeometry, explosionMaterial);
        crashGroup.add(explosion);
        
        // Add to explosions list for updating
        this.explosions.push(crashGroup);
        this.scene.add(crashGroup);
        
        return crashGroup;
    }

    createStuntEffect(position: THREE.Vector3, stuntType: string): THREE.Group {
        const stuntGroup = new THREE.Group();
        
        // Create sparkle effect for stunts
        const sparkleGeometry = new THREE.BufferGeometry();
        const sparkleCount = 30;
        const positions = new Float32Array(sparkleCount * 3);
        const colors = new Float32Array(sparkleCount * 3);
        
        for (let i = 0; i < sparkleCount; i++) {
            const i3 = i * 3;
            
            positions[i3] = position.x + (Math.random() - 0.5) * 10;
            positions[i3 + 1] = position.y + (Math.random() - 0.5) * 10;
            positions[i3 + 2] = position.z + (Math.random() - 0.5) * 10;
            
            // Golden sparkles
            colors[i3] = 1.0;
            colors[i3 + 1] = 0.8;
            colors[i3 + 2] = 0.0;
        }
        
        sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        sparkleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const sparkleMaterial = new THREE.PointsMaterial({
            size: 3,
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });
        
        const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
        stuntGroup.add(sparkles);
        
        this.scene.add(stuntGroup);
        
        // Auto-remove after animation
        setTimeout(() => {
            this.scene.remove(stuntGroup);
        }, 2000);
        
        return stuntGroup;
    }

    private updateParticles(deltaTime: number) {
        // Update particle systems
        this.particleSystems.forEach((system, index) => {
            const positions = system.geometry.attributes.position.array as Float32Array;
            
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] -= deltaTime * 20; // Gravity effect
                
                // Remove particles that fall too low
                if (positions[i + 1] < -10) {
                    this.scene.remove(system);
                    this.particleSystems.splice(index, 1);
                }
            }
            
            system.geometry.attributes.position.needsUpdate = true;
        });
    }

    private updateExplosions(deltaTime: number) {
        this.explosions.forEach((explosion, index) => {
            const particles = explosion.children[0] as THREE.Points;
            if (!particles) return;
            
            const positions = particles.geometry.attributes.position.array as Float32Array;
            const velocities = particles.geometry.attributes.velocity.array as Float32Array;
            
            for (let i = 0; i < positions.length; i += 3) {
                // Update positions based on velocity
                positions[i] += velocities[i] * deltaTime;
                positions[i + 1] += velocities[i + 1] * deltaTime;
                positions[i + 2] += velocities[i + 2] * deltaTime;
                
                // Apply gravity
                velocities[i + 1] -= 9.8 * deltaTime;
                
                // Apply drag
                velocities[i] *= 0.98;
                velocities[i + 1] *= 0.98;
                velocities[i + 2] *= 0.98;
            }
            
            particles.geometry.attributes.position.needsUpdate = true;
            
            // Fade out explosion
            const material = particles.material as THREE.PointsMaterial;
            material.opacity *= 0.95;
            
            // Remove when fully faded
            if (material.opacity < 0.01) {
                this.scene.remove(explosion);
                this.explosions.splice(index, 1);
            }
        });
    }

    private updateNitroTrails(deltaTime: number) {
        this.nitroTrails.forEach((trail, index) => {
            const particles = trail.children[0] as THREE.Points;
            if (!particles) return;
            
            const material = particles.material as THREE.PointsMaterial;
            material.opacity *= 0.92;
            
            // Remove when faded
            if (material.opacity < 0.1) {
                this.scene.remove(trail);
                this.nitroTrails.splice(index, 1);
            }
        });
    }

    cleanup() {
        // Clean up all effects
        this.particleSystems.forEach(system => {
            this.scene.remove(system);
        });
        this.explosions.forEach(explosion => {
            this.scene.remove(explosion);
        });
        this.nitroTrails.forEach(trail => {
            this.scene.remove(trail);
        });
        
        this.particleSystems = [];
        this.explosions = [];
        this.nitroTrails = [];
    }
}