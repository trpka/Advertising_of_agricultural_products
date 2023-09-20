interface AddressInterface{
    id:number;
    country: string ;
    city: string ;
    street: string;
    zipCode:string;
  }
  export class Address implements AddressInterface{
    id:number;
    country: string ;
    city: string ;
    street: string;
    zipCode:string;
    
    constructor(obj:AddressInterface){
        this.id=obj.id;
        this.country=obj.country;
        this.city=obj.city;
        this.street=obj.street;
        this.zipCode=obj.zipCode;
    }
  }
  