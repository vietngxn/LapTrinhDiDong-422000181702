import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): string {
        const studentNames = this.students.map(s => s.name).join(", ") || "None";
        const teacherNames = this.teachers.map(t => t.name).join(", ") || "None";
        return `School: ${this.name} | Teachers: ${teacherNames} | Students: ${studentNames}`;
    }
}
