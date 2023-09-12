interface CustomerSupportDTOInterface{
    id:number;
    question: string ;
    answer: string ;
    date:Date;
    registeredUserId:number;
    adminId:number;  
  }
  export class CustomerSupportDTO implements CustomerSupportDTOInterface{
    id:number;
    question: string ;
    answer: string ;
    date:Date;
    registeredUserId:number;
    adminId:number; 
    constructor(obj:CustomerSupportDTOInterface){
        this.id=obj.id;
        this.question=obj.question;
        this.answer=obj.answer;
        this.date=obj.date;
        this.registeredUserId=obj.registeredUserId;
        this.adminId=obj.adminId;
    }
  }
  