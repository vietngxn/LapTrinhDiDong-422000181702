export abstract class Shape {
    abstract area(): number;

    static describe(): string {
        return "A shape is a two-dimensional geometric object.";
    }
}
