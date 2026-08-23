import { Employee } from "./Employee";

export class Developer extends Employee {
    primaryLanguage: string;

    constructor(name: string, salary: number, primaryLanguage: string) {
        super(name, salary);
        this.primaryLanguage = primaryLanguage;
    }

    code(): string {
        return `${this.name} is writing code in ${this.primaryLanguage}.`;
    }
}
