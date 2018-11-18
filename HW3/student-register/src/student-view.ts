import {Student} from "./student-model";
export class StudentView{
  constructor(private student:Student){}

  render() {
      return `<li class="list-group-item" data-facNo=${this.student.getFacNO}>
               ${this.student.getFacNO} ${this.student.getFirstName} ${this.student.getLastName}
               <input type="checkbox" class="toggleStatus" ${this.student.getStatus?"checked":""}/>
               <button class="remove text-danger">&times;</button>
             </li>`;
  };

}
