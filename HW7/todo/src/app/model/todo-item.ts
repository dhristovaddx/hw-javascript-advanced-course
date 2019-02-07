export class TodoItem {
    constructor(  public _id:string
                , public title:string
                , public status:boolean = true
                , public completed:boolean = false){}
}
