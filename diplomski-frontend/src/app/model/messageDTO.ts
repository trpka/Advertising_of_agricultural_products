interface MessageDTOInterface{
    id:number;
    date:Date;
    text: string ;
    senderId:number;
    recipientId:number;
  }
  export class MessageDTO implements MessageDTOInterface{
    id:number;
    date:Date;
    text: string ;
    senderId:number;
    recipientId:number; 
    constructor(obj:MessageDTOInterface){
        this.id=obj.id;
        this.date=obj.date;
        this.text=obj.text;
        this.senderId=obj.senderId;
        this.recipientId=obj.recipientId;
    }
  }
  