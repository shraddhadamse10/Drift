import * as CANNON from 'cannon-es';

export class PhysicsWorld {
    private world: CANNON.World;
    private timeStep = 1 / 60;

    constructor() {
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -9.82, 0)
        });
        
        this.setupWorld();
    }

    private setupWorld() {
        // Setup collision detection
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 10;
        
        // Create materials
        const groundMaterial = new CANNON.Material('ground');
        const carMaterial = new CANNON.Material('car');
        
        // Define contact materials
        const groundCarContact = new CANNON.ContactMaterial(groundMaterial, carMaterial, {
            friction: 0.8,
            restitution: 0.1
        });
        
        this.world.addContactMaterial(groundCarContact);
        
        // Add ground plane
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.addShape(groundShape);
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        this.world.addBody(groundBody);
    }

    step(deltaTime: number) {
        this.world.step(this.timeStep, deltaTime, 3);
    }

    getWorld(): CANNON.World {
        return this.world;
    }

    addBody(body: CANNON.Body) {
        this.world.addBody(body);
    }

    removeBody(body: CANNON.Body) {
        this.world.removeBody(body);
    }
}