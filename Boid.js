export class Boid {
    constructor(id, width, height) {
        this.position = { x: Math.random() * width, y: Math.random() * height };
        this.vel = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
        this.acceleration = { x: 0, y: 0 };
        this.maxForce = 0.2;
        this.maxSpeed = 2;
        this.desiredSeparation = 18;
        this.id = id;
        this.perceptionRadius = 40;
    }

    flock(boidArray, title, mouse) {
        let alignment = this.alignment(boidArray);
        let cohesion = this.cohesion(boidArray);
        let avoidance = this.avoidance(boidArray, title, mouse);


        this.acceleration.x += alignment.x + cohesion.x + (avoidance.x);
        this.acceleration.y += alignment.y + cohesion.y + (avoidance.y);

        this.vel.x += this.acceleration.x;
        this.vel.y += this.acceleration.y;

        const speed = Math.hypot(this.vel.x, this.vel.y);
        if (speed > this.maxSpeed) {
            this.vel.x = (this.vel.x / speed) * this.maxSpeed;
            this.vel.y = (this.vel.y / speed) * this.maxSpeed;
        }

        this.acceleration.x = 0;
        this.acceleration.y = 0;

    }

    alignment(boidArray) {
        let steering = { x: 0, y: 0 };
        let total = 0;

        for (const other of boidArray) {
            const distance = Math.hypot(
                this.position.x - other.position.x,
                this.position.y - other.position.y
            );

            if (other !== this && distance < this.perceptionRadius) {
                steering.x += other.vel.x;
                steering.y += other.vel.y;
                total++;
            }
        }

        if (total > 0) {
            steering.x /= total;
            steering.y /= total;

            const magnitude = Math.hypot(steering.x, steering.y);
            if (magnitude > 0) {
                steering.x = (steering.x / magnitude) * this.maxSpeed;
                steering.y = (steering.y / magnitude) * this.maxSpeed;
            }

            steering.x -= this.vel.x;
            steering.y -= this.vel.y;

            const steerMag = Math.hypot(steering.x, steering.y);
            if (steerMag > this.maxForce) {
                steering.x = (steering.x / steerMag) * this.maxForce;
                steering.y = (steering.y / steerMag) * this.maxForce;
            }
        }

        return steering;
    }

    cohesion(boidArray) {
        let steering = { x: 0, y: 0 };
        let total = 0;

        for (const other of boidArray) {
            const distance = Math.hypot(
                this.position.x - other.position.x,
                this.position.y - other.position.y
            );

            if (other !== this && distance < this.perceptionRadius) {
                steering.x += other.position.x;
                steering.y += other.position.y;
                total++;
            }
        }

        if (total > 0) {
            steering.x /= total;
            steering.y /= total;

            const desired = {
                x: steering.x - this.position.x,
                y: steering.y - this.position.y
            };

            const magnitude = Math.hypot(desired.x, desired.y);
            if (magnitude > 0) {
                desired.x = (desired.x / magnitude) * this.maxSpeed;
                desired.y = (desired.y / magnitude) * this.maxSpeed;
            }

            steering.x = desired.x - this.vel.x;
            steering.y = desired.y - this.vel.y;

            const steerMag = Math.hypot(steering.x, steering.y);
            if (steerMag > this.maxForce) {
                steering.x = (steering.x / steerMag) * this.maxForce;
                steering.y = (steering.y / steerMag) * this.maxForce;
            }
        }

        return steering;
    }

    avoidance(boidArray, title, mouse) {
        let steering = { x: 0, y: 0 };
        let total = 0;

        for (const other of boidArray) {
            const distance = Math.hypot(
                this.position.x - other.position.x,
                this.position.y - other.position.y
            );

            if (other !== this && distance < this.perceptionRadius) {
                const diff = {
                    x: this.position.x - other.position.x,
                    y: this.position.y - other.position.y
                };
                const weight = 1 / (distance * distance);
                steering.x += diff.x * weight;
                steering.y += diff.y * weight;
                total++;
            }
        }

        const distance = Math.hypot(
            this.position.x - mouse.x,
            this.position.y - mouse.y
        );
        if (distance < this.perceptionRadius * 3) {
            const diff = {
                x: this.position.x - mouse.x,
                y: this.position.y - mouse.y
            };
            const weight = 50 / (distance * distance);
            steering.x += diff.x * weight;
            steering.y += diff.y * weight;
            total++;
        }



        if (total > 0) {
            steering.x /= total;
            steering.y /= total;

            const magnitude = Math.hypot(steering.x, steering.y);
            if (magnitude > 0) {
                steering.x = (steering.x / magnitude) * this.maxForce;
                steering.y = (steering.y / magnitude) * this.maxForce;
            }
        }

        return steering;
    }
}

