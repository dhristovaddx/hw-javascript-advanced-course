import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent      } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService} from './model/todos.service';
import { TodoRoutingModule } from './todo-routing/todo-routing.module';
import { RemovedTodoItemsComponent } from './removed-todo-items/removed-todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RemovedTodoItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
