import { Admin } from "./admin";
import { RegisteredUser } from "./registeredUser";

interface CustomerSupportInterface{
    id:number;
    question: string ;
    answer: string ;
    date:Date;
    registeredUser:RegisteredUser;
    admin:Admin;  
  }
  export class CustomerSupport implements CustomerSupportInterface{
    id:number;
    question: string ;
    answer: string ;
    date:Date;
    registeredUser:RegisteredUser;
    admin:Admin;
    constructor(obj:CustomerSupportInterface){
        this.id=obj.id;
        this.question=obj.question;
        this.answer=obj.answer;
        this.date=obj.date;
        this.registeredUser=obj.registeredUser;
        this.admin=obj.admin;
    }
  }
  