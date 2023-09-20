interface CompanyDTOInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    name: string ;
    regNumOfCompany: string ;
    addressId:number;
  
  }
  export class CompanyDTO implements CompanyDTOInterface{
    id:number;
    username: string ;
    password: string ;
    email: string;
    mobile:string;
    enabled:boolean;
    role:string;
    name: string ;
    regNumOfCompany: string ;
    addressId:number;

    constructor(obj:CompanyDTOInterface){
        this.id=obj.id;
        this.username=obj.username;
        this.password=obj.password;
        this.email=obj.email;
        this.mobile=obj.mobile;
        this.enabled=obj.enabled;
        this.role=obj.role;
        this.name=obj.name;
        this.regNumOfCompany=obj.regNumOfCompany;
        this.addressId=obj.addressId;
    }
  }
  