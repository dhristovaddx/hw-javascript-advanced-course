import StudentModel from "./student-model";

const studentCollection = (...studentArr:string[])=>{

    let collection:object[] = studentArr.map( (name, index)=>{
        return StudentModel( index, name);
    });

    const get = ():object[] => {
      return collection;
    }

    const add = (student:string):void => {
      const id = collection.length + 1;
      collection = [...collection, StudentModel(id, student)];
    }

    const remove = (studentId:number):void => {
      collection = collection.filter((student)=>{
        return student['studentId'] !== studentId;

      });
    }

    const getStudentById = (studentId:number):object =>{
        let student:object;

        collection.forEach((s)=>{
            if( student['studentId'] === studentId){
                student = s;
            }
        });
        return student;
    };

    const toggleStatus = (studentId:number):void =>{
        collection = collection.map( (student)=>{
            if( student['studentId'] === studentId ){
                return {
                    ...student,
                    status: !student['status']
                };
            }
            return student;
        });
    };

    return {
        get,
        add,
        remove,
        getStudentById,
        toggleStatus
    };
  }

  export default studentCollection;
