import {Container} from './container';

export class Queue<T> implements Container<T>{
    private elements:T[];

    constructor(){
      this.elements = [];
    }

    put(el:T):void{
      this.elements.push(el);
    }

    get():T{
      return this.elements.shift():T;
    }

    remove(el:T){
      this.elements.forEach((item) =>{
        if (item === el) {
          return console.log(`Removed: ${el}`);
        }
      });
    }

    size():number{
        return this.elements.length;
    }

}
