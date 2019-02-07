import { Component, OnInit } from '@angular/core';

import { TodoItem }          from '../model/todo-item';
import { RemovedTodosService }  from '../model/removed-todos.service';

@Component({
  selector: 'app-removed-todo-items',
  templateUrl: './removed-todo-items.component.html',
  styleUrls: ['./removed-todo-items.component.scss']
})
export class RemovedTodoItemsComponent implements OnInit {

  items:TodoItem[];
  item:TodoItem;
  message:string = '';
    
  constructor(private RemovedTodosService:RemovedTodosService) {
    console.log('list component constructor');
  }

  ngOnInit() {
    this.getArchivedItems()
  }

  getArchivedItems():void{
    this.RemovedTodosService.getArchivedItems()
    .subscribe((items)=>this.items = items
              ,(error)=>console.log(error)
              ,()=>this.message='List Loaded');
  }

  toggleCompleted(item:TodoItem):void{
    console.log(`toggle completed ${item._id}`);
    
    this.RemovedTodosService.toggleCompleted(item)
                     .subscribe((item) => {
                       console.log(item);
                       this.item = item;
                     },
                     (err) => console.log(err),
                     () => console.log('todo completed is updated'));
    if (item.status) {
      item.completed = true;
      item.status = false;
    } else {
      item.completed = false;
      item.status = true;
    }
  }
  

  removeItem(id:string):void{
    this.RemovedTodosService.removeItem(id)
                     .subscribe((item) => {
                       console.log(item);
                       this.getArchivedItems();
                     },
                     (err) => console.log(err),
                     ()=> console.log('todo removed'));;
  }
}
