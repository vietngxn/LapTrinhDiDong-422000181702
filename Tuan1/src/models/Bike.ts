import { Vehicle } from "./Vehicle";

export class Bike implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    getDetails(): string {
        return `Bike - Brand: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}
