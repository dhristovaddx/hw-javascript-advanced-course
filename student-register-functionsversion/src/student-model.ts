const studentModel = (studentId:number, name:string, status:boolean = false) => {
  return {
    studentId,
    name,
    status
  }
}

export default studentModel;
