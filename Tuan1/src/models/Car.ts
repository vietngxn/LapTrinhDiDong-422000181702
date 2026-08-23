import { Vehicle } from "./Vehicle";
import { Movable } from "./Movable";

export class Car implements Vehicle, Movable {
    brand: string;
    model: string;
    year: number;
    speed: number;

    constructor(brand: string, model: string, year: number, speed: number = 0) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    displayInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }

    getDetails(): string {
        return `Car - Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Speed: ${this.speed} km/h`;
    }

    move(): string {
        return `${this.brand} ${this.model} is moving on the road at ${this.speed} km/h.`;
    }
}