import { BaseAnimal } from "./BaseAnimal";

export class Cat extends BaseAnimal {
    constructor(name: string) {
        super(name);
    }

    meow(): string {
        return "Meomeo";
    }


}