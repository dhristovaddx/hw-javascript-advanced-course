import Student from "./student-model";
import StudentCollection from "./student-collection";
import StudentViewCollection from "./student-list-view";

namespace app {

  export const init = ():void => {
    console.log("Hello Student Register");


    const students = new StudentCollection();
    const s:Student[]= [
                new Student(1, "John", "Doe", true ),
                new Student(2, "Anna", "Smith", true),
                new Student(3, "Betty", "Cooper", false)
              ];

    students.add(s);

    const students$ = document.getElementById('students');

    const studentListView = new StudentViewCollection(students$, s);
    studentListView.render();

  }
}

app.init();
