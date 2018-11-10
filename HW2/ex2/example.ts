//Example 1

console.log('~~Example 1~~\n');
import {Product} from '../ex1/product';
import {Queue} from './queue';

const products = new Queue<Product>();
const notebook = new Product("Notebook", "Supplies", 3, 200);

products.put(new Product ("Phone", "Electronics", 520, 10));
products.put(new Product ("Scissors", "Supplies", 3, 30));
products.put(new Product ("Stapler", "Supplies", 1, 60));
products.put(new Product ("Glue", "Supplies", 2, 0));
products.put(notebook);

const p:Product = products.get();
p.show();
const removed = products.remove(notebook);

console.log(`###Number of products: ${products.size()} ###\n`);

//Example 2
console.log('~~Example 2~~\n');
const numbers = new Queue<number>();

numbers.put(1);
numbers.put(3);
numbers.put(5);
numbers.put(7);

const n:number = numbers.get();
const item = numbers.remove(3);
console.log(`First number in Queue: ${n}\n`);
console.log(`Numbers left: ${numbers.size()}\n`);

//Example 3
console.log('~~Example 3~~\n');
const people = new Queue<string>();

people.put("John");
people.put("Amy");
people.put("Tom");

const firstPerson = people.get();
const removedPerson = people.remove("Amy");
console.log(`First Person: ${firstPerson}`);
console.log(`People count: ${people.size()}\n`);
