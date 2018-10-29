const Product = (function (){
	let productName;
	let productPrice;
	let productQuantity;

	function description() {
		console.log(`Description of product: ${this.productName}, ${this.productPrice}, ${this.productQuantity}`);
	}

	return function (name, price, quantity){
		this.productName = name;
		this.productPrice = price;
		this.productQuantity = quantity;
		this.product = description;
	}
})();

const pencil = new Product("Pencil", "20 euro", "200");
pencil.product();