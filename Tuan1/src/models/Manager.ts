import { Employee } from "./Employee";

export class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    manage(): string {
        return `${this.name} is managing the ${this.department} department.`;
    }
}
