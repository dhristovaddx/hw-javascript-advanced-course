import {Student} from "./student-model";
import {StudentCollection} from "./student-collection";
import {StudentView} from "./student-view";
import {studentViewCollection} from "./student-list-view";

namespace app {

  export const init = ():void => {
    console.log("Hello Student Register");
    const students = new StudentCollection();


    const student1 = new Student(15114059, "John", "Doe", true );
    const student2 = new Student(15114039, "Anna", "Smith", true);
    const student3 = new Student(15114052, "Betty", "Cooper", false);
    students.add(student1);
    students.add(student2);
    students.add(student3);

    const students$ = document.getElementById('students');

    console.log(`Students: ${students.get()}`);

    const st1 = new StudentView(student1);
    const st2 = new StudentView(student2);
    const st3 = new StudentView(student3);
    console.log(st1);

    const studentListView = new studentViewCollection(students$);
    studentListView.render(st1);
    studentListView.render(st2);
    studentListView.render(st3);
    studentListView.show();

  }
}

app.init();
