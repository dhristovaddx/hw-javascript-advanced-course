function Product(){
    this.product = function(){
        console.log(`Product description: 
        	Name: ${this.productName} 
        	Price: ${this.productPrice} 
        	Quantity: ${this.productQuantity}
        	Accountable Person: ${this.accPerson}`);
    }
}
 Object.defineProperty(Product.prototype, 'productName', {
    set: function(name){
        this.__pName = name;
    },
    get:function(){
        return this.__pName;
    }
});
 Object.defineProperty(Product.prototype, 'productPrice', {
    set: function(price){
        this.__pPrice = price;
    },
    get:function(){
        return this.__pPrice;
    },
});
 Object.defineProperty(Product.prototype, 'productQuantity', {
    set: function(quantity){
        this.__pQuantity = quantity;
    },
    get:function(){
        return this.__pQuantity;
    }
});
 Object.defineProperty(Product.prototype, 'accPerson', {
 	value: "John Smith",
    writable: false
});

 const pencil = new Product();

 pencil.productName = "pencil";
 pencil.productPrice = "20 euro";
 pencil.productQuantity = "200";

 Product.prototype.inStock = function(product,productQuantity){
 	if (productQuantity === 0) {
 		product.inStock = false;
 	} else {
 		product.inStock = true;
 	}
 	return product.inStock;
 }

 console.log(`###Product description###
 	
 	Name: ${pencil.productName}
 	Price: ${pencil.productPrice}
 	Quantity: ${pencil.productQuantity}
 	In stock: ${pencil.inStock(pencil, pencil.productQuantity)}
 	Accountable Person: ${pencil.accPerson}`);

