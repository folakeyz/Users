import { IUsers } from "./IUsers";
export class ClassUsers{
    public Name:string;
    public Title:string;
    public File:string;
    public Email:string;
    public id:string;
   


    constructor(item: IUsers){
        this.Name = item.Name;
        this.Title = item.Title;
        this.File = item.File;
        this.Email = item.Email;
        this.id = item.id;
       
    }
}