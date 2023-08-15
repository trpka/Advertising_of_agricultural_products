interface RegisteredUserInterface{
  id:number;
  username: string ;
  password: string ;
  email: string;
  mobile:string;
  enabled:boolean;
  role:string;
  authorities: [] ;
  firstName1: string ;
  lastName1: string ;
  announcements: [];
  products:[];

}
export class RegisteredUser implements RegisteredUserInterface{
  id:number;
  username: string ;
  password: string ;
  email: string;
  mobile:string;
  enabled:boolean;
  role:string;
  authorities: [] ;
  firstName1: string ;
  lastName1: string ;
  announcements: [];
  products:[];
  constructor(obj:RegisteredUserInterface){
      this.id=obj.id;
      this.username=obj.username;
      this.password=obj.password;
      this.email=obj.email;
      this.mobile=obj.mobile;
      this.enabled=obj.enabled;
      this.role=obj.role;
      this.authorities=obj.authorities;
      this.firstName1=obj.firstName1;
      this.lastName1=obj.lastName1;
      this.announcements=obj.announcements;
      this.products=obj.products;
  }
}
