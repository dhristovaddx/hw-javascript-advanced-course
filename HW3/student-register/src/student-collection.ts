import Student from "./student-model";

export default class StudentCollection {
  private students:Student[];

  constructor(){
    this.students = [];
  }

  add(els:Student[]):void{
    els.map((student)=> {
      this.students.push(student);
    });
  }

  remove(el:Student):void{
    this.students = this.students.filter((student) => student !== el);
  }

  getStudents(){
    return this.students;
  }

  getStudentById (studentId:number):Student {
        let student:Student;
        this.students.forEach((s)=>{
            if( student.studentId === studentId){
                student = s;
            }
        });

        return student;
    };
}
