export class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        return `Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
    }
}