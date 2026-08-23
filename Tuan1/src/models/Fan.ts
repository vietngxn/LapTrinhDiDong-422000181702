import { Appliance } from "./Appliance";

export class Fan extends Appliance {
    speedLevel: number;

    constructor(name: string, speedLevel: number = 1) {
        super(name);
        this.speedLevel = speedLevel;
    }

    turnOn(): string {
        return `The Fan '${this.name}' is now spinning at level ${this.speedLevel}.`;
    }
}
