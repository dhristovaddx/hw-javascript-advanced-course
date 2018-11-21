import StudentCollection from './student-collection';
import StudentView from './student-view';
import Student from './student-model';

export default class StudentViewCollection{
    private students:StudentCollection;
    private el$:any;

    constructor(el$, students:Student[]){
      this.students = new StudentCollection();
      this.students.add(students);
      this.el$ = el$;
    }

    render():void{
      let list$ = this.students.getStudents().map((student)=>{
        return (new StudentView(student)).render();
      }).join('');
      this.el$.innerHTML = `<ul class="list-group">${list$}</ul>`;
    };

};
