import Student from "./student-model";
export default class StudentView{
  constructor(private student:Student){}

  render() {
      return `<li class="list-group-item" data-facNo=${this.student.studentId}>
               ${this.student.studentId}
               ${this.student.firstName}
               ${this.student.lastName}
               <input type="checkbox"
                      class="toggleStatus"
                      ${this.student.status?"checked":""}/>
               <button class="remove text-danger">&times;</button>
             </li>`;
  };

}
