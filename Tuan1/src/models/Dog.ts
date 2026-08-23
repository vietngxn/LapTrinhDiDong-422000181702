import { BaseAnimal } from "./BaseAnimal";

export class Dog extends BaseAnimal {
    constructor(name: string) {
        super(name);
    }

    bark(): string {
        return "Gâu gâu";
    }


}