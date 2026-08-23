import { Movable } from "./Movable";

export class Robot implements Movable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `Robot ${this.name} is walking`;
    }
}
