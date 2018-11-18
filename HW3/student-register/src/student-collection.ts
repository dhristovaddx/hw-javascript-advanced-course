import {Student} from "./student-model";

export class StudentCollection {
  private students:Student[];

  constructor(){
    this.students = [];
  }

  add(el:Student):void{
    this.students.push(el);
  }

  remove(el:Student):void{
    this.students = this.students.filter((student) => student !== el);
  }

  get(){
    return this.students;
  }
}
