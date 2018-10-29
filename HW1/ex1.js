function Products(name, price, quantity){
	let productName = name;
	let productPrice = price;
	let productQuantity = quantity;

	this.description = function description(){
		console.log(`Description of product: ${productName}, ${productPrice}, ${productQuantity}`);
	}
}

const pencil = new Products("pencil","29 euro", "200");

pencil.description();

