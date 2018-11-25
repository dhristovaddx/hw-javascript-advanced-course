export default class Student {
  constructor(
      private _studentId:number,
      private _firstName:string,
      private _lastName:string,
      private _status:boolean
  ) {}

  set studentId(studentId:number){
    this._studentId = studentId;
  }

  set firstName(firstName:string){
    this._firstName = firstName;
  }

  set lastName(lastName:string){
    this._lastName = lastName;
  }

  set status(status:boolean){
    this._status = status;
  }

  get studentId(){
    return this._studentId;
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get status(){
    return this._status;
  }
}
