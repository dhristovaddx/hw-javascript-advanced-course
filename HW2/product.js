"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(productName, productType, productPrice, productQuantity) {
        this.productName = productName;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }
    set name(name) {
        this.productName = name;
    }
    set type(type) {
        this.productType = type;
    }
    set price(price) {
        this.productPrice = price;
    }
    set quantity(quantity) {
        this.productQuantity = quantity;
    }
    get name() {
        return this.productName;
    }
    get type() {
        return this.productType;
    }
    get price() {
        return this.productPrice;
    }
    get quantity() {
        return this.productQuantity;
    }
    checkStock(quantity) {
        return this.quantity > 0;
    }
    show() {
        console.log(`###Product description###
      Name: ${this.name}
      Type: ${this.type}
      Price: ${this.price.toString()} euro;
      Quantity: ${this.quantity.toString()} notebooks;
      In Stock: ${this.checkStock(this.quantity)}`);
    }
}
const notebook = new Product("Notebook", "Supplies", 5, 20);
const pencil = new Product("Pencil", "Supplies", 2, 0);
const tv = new Product("TV", "Electronics", 1200, 30);
notebook.show();
pencil.show();
tv.show();
