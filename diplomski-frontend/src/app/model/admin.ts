interface AdminInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    authorities: [] ;
    firstName: string ;
    lastName: string ;
    announcements: [];
    products:[];
  
  }
  export class Admin implements AdminInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    authorities: [] ;
    firstName: string ;
    lastName: string ;
    announcements: [];
    products:[];
    constructor(obj:AdminInterface){
        this.id=obj.id;
        this.username=obj.username;
        this.password=obj.password;
        this.email=obj.email;
        this.mobile=obj.mobile;
        this.enabled=obj.enabled;
        this.role=obj.role;
        this.authorities=obj.authorities;
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
        this.announcements=obj.announcements;
        this.products=obj.products;
    }
  }
  