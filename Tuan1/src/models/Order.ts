import { Product } from "./Product";

export class Order {
    products: Product[] = [];

    constructor(products: Product[] = []) {
        this.products = products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
