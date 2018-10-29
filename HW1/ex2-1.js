const pencil = {
	name: "pencil",
	price: "20 euro",
	quantity: "200",
	description: function(){
		console.log(`Description of product: ${this.name}, ${this.price}, ${this.quantity}`);
	}	

};

pencil.description();