import Student from "./student-model";
export default class StudentView{
  constructor(private student:Student){}

  render() {
      return `<tr class="row-student" data-id=${this.student.studentId}>
                  <td>${this.student.studentId}</td>
                  <td>${this.student.firstName}</td>
                  <td>${this.student.lastName}</td>
                  <td><input type="checkbox" class="toggleStatus" ${this.student.status?"checked":""}/>${this.student.status? "Not active":"Active"}</td>
                  <td><button class="remove close text-danger">&times;</button></td>
                </tr>`;
  };

}
