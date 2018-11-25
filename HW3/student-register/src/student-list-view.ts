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
      this.el$.innerHTML = `<tr id="main">
                              <th>ID</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Status</th>
                              <th>&nbsp</th>
                            </tr>
                            ${list$}`;
      this.attachEvents();
    };

    attachEvents():void {
      const students$ = this.el$.querySelectorAll('.row-student');

      students$.forEach( (student$)=>{
          const id = parseInt(student$.getAttribute('data-id'));
          const checkbox$ = student$.querySelector('.toggleStatus');
          const removeButton$ = student$.querySelector('.remove');


          checkbox$.addEventListener('click', ()=>{
              console.log("id:", id);
          });

          removeButton$.addEventListener('click', ()=>{
            console.log("id:", id);
            let student = this.students.getStudentById(id);
            this.students.remove(student);
          });
      });
  };
};
