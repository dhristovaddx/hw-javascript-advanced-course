import {StudentCollection} from './student-collection';
import {StudentView} from './student-view';

export class studentViewCollection extends StudentCollection{
    private studentsArr:StudentCollection[];
    private student:StudentView;
    constructor(private el$){
      super();
      this.studentsArr = [];
    }

    render(st):void{
        this.student = st;
        this.studentsArr.push(st);
    };

    show():void {
      const list$ = this.studentsArr.map( (student)=>{
            return `<ul class="list-group">${this.student.render()}</ul>`;
        });
        this.el$.innerHTML = list$;
    }

    // ~~~second try~~~
    // show():void{
    //   this.studentsArr.forEach((student$) => {
    //     let ul$ = document.createElement('ul');
    //     ul$.setAttribute("class", "list-group");
    //     ul$.innerHTML = this.student.render();
    //     this.el$ = document.getElementById('students').appendChild(ul$);
    //   });
    // }

};
