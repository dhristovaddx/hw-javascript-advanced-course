import { Component, OnInit } from '@angular/core';

import { TodoItem }          from '../model/todo-item';
import { TodosService }  from '../model/todos.service';
 
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items:TodoItem[];
  item:TodoItem;
  message:string = '';
    
  constructor(private TodosService:TodosService) {
    console.log('list component constructor');
  }

  ngOnInit() {
    //console.log('list component on init');
    this.getTodoItems()
  }

  getTodoItems():void{
    this.TodosService.getTodoItems()
    .subscribe((items)=>this.items = items
              ,(error)=>console.log(error)
              ,()=>this.message='List Loaded');
  }
  

  toggleCompleted(item:TodoItem):void{
    console.log(`toggle completed ${item._id}`);
    
    this.TodosService.toggleCompleted(item)
                     .subscribe((item) => {
                       console.log(item);
                       this.item = item;
                     },
                     (err) => console.log(err),
                     () => console.log('todo completed is updated'));
    if (!item.completed) {
      item.completed = true;
      item.status = false;
    } else {
      item.completed = false;
      item.status = true;
    }
  }

  removeItem(id:string):void{
    this.TodosService.removeItem(id)
                     .subscribe((item) => {
                       console.log(item);
                       this.getTodoItems();
                     },
                     (err) => console.log(err),
                     ()=> console.log('todo removed'));;
  }

  addNewTodoItem(el:any):void{
    //console.log(el);
    if( el.value.trim().length > 0 ){
        let newTodo:TodoItem = new TodoItem(undefined, el.value, el.status);
        this.TodosService.addNewTodo(newTodo)
                         .subscribe((item) => {
                           console.log(item);
                           this.getTodoItems();
                         },
                         (err) => console.log(err),
                         ()=> console.log('todo added'));
        console.log(el.value);
        el.value = '';
    }
  }
}
