const Product = (function (){
	let productName;
	let productPrice;
	let productQuantity;

	function description() {
		console.log(`Description of product: ${this.productName}, ${this.productPrice}, ${this.productQuantity}`);
	}

	return {
		name: productName,
		price: productPrice,
		quantity: productQuantity,
		description
	}
})();

Product.productName ="pencil";
Product.productPrice = "20 euro";
Product.productQuantity = "200";
Product.description();