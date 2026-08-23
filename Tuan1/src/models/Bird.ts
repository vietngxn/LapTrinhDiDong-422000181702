import { Flyable } from "./Flyable";

export class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): string {
        return `${this.name} is flying high in the sky!`;
    }
}
