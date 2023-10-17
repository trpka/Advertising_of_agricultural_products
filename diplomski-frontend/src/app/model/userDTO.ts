interface UserDTOInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
  }
  export class UserDTO implements UserDTOInterface{
    id:number;
    email: string;
    username: string ;
    password: string ;
    mobile:string;
    enabled:boolean;
    role:string;
   
    constructor(obj:UserDTOInterface){
        this.id=obj.id;
        this.email=obj.email;
        this.username=obj.username;
        this.password=obj.password;
        this.mobile = obj.mobile;
        this.role = obj.role;
    }
  }
  