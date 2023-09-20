interface CompanyInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    authorities: [];
    name: string ;
    regNumOfCompany: string ;
    addressId:number;
    announcements: [];
    products:[];
  
  }
  export class Company implements CompanyInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    authorities: [] ;
    name: string ;
    regNumOfCompany: string ;
    addressId:number;
    announcements: [];
    products:[];
    constructor(obj:CompanyInterface){
        this.id=obj.id;
        this.username=obj.username;
        this.password=obj.password;
        this.email=obj.email;
        this.mobile=obj.mobile;
        this.enabled=obj.enabled;
        this.role=obj.role;
        this.authorities=obj.authorities;
        this.name=obj.name;
        this.regNumOfCompany=obj.regNumOfCompany;
        this.addressId=obj.addressId;
        this.announcements=obj.announcements;
        this.products=obj.products;
    }
  }
  