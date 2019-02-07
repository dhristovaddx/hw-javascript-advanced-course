import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {TodoItem} from './todo-item';

import { Observable } from 'rxjs';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

const URL:string = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class RemovedTodosService {

  constructor(private http:HttpClient) { }

  getArchivedItems():Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>(`${URL}/removed`);
  }

  removeItem(id:string):Observable<any>{
    return this.http.delete<TodoItem>(`${URL}/removed/${id}`);
  }

  toggleCompleted(item:TodoItem):Observable<TodoItem>{ 
    return this.http.put<TodoItem>(`${URL}/removed/${item._id}`, item);
}

}
