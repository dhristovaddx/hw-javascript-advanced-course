export class Student {
  constructor(
      private facNo:number,
      private fName:string,
      private lName:string,
      private status:boolean
  ) {}

  set setFacNo(facNo:number) {
    this.facNo = facNo;
  }
  set setFirstName(fName:string){
    this.fName = fName;
  }
  set setLastName(lName:string){
    this.lName = lName;
  }
  set setStatus(status:boolean){
    this.status = status;
  }
  get getFacNO(){
    return this.facNo;
  }
  get getFirstName(){
    return this.fName;
  }
  get getLastName(){
    return this.lName;
  }
  get getStatus(){
    return this.status;
  }
}
