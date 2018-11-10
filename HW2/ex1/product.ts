import {Stock} from './stock';

export class Product implements Stock{
  constructor (private productName:string,
              private productType:string,
              private productPrice:number,
              private productQuantity:number){}

  set name(name:string){
    this.productName = name;
  }
  set type(type:string){
    this.productType = type;
  }
  set price(price:number){
    this.productPrice = price;
  }
  set quantity(quantity:number){
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
  checkStock(quantity:number):boolean {
    return this.quantity > 0;
  }

  show():void{
    console.log(`###Product description###
      Name: ${this.name}
      Type: ${this.type}
      Price: ${this.price} euro
      Quantity: ${this.quantity} units
      In Stock: ${this.checkStock(this.quantity)}`);
  }
}
