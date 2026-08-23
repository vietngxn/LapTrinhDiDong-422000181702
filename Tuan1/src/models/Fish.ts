import { Swimmable } from "./Swimmable";

export class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): string {
        return `${this.name} is swimming`;
    }
}
