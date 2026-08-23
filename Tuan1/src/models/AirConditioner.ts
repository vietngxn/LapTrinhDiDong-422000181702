import { Appliance } from "./Appliance";

export class AirConditioner extends Appliance {
    targetTemp: number;

    constructor(name: string, targetTemp: number = 24) {
        super(name);
        this.targetTemp = targetTemp;
    }

    turnOn(): string {
        return `The AirConditioner '${this.name}' is turned on, cooling to ${this.targetTemp}°C.`;
    }
}
