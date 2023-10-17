import { ProductDTO } from "./productDTO";

interface PurchaseDTOInterface{
    id:number;
    date: Date ;
    totalPrice: number ;
    productsDTO: ProductDTO[];
    registeredUserId:number;
    city:string;
    address:string;
  
  }
  export class PurchaseDTO implements PurchaseDTOInterface{
    id:number;
    date: Date ;
    totalPrice: number ;
    productsDTO: ProductDTO[];
    registeredUserId:number;
    city:string;
    address:string;
    constructor(obj:PurchaseDTOInterface){
        this.id=obj.id;
        this.date=obj.date;
        this.totalPrice=obj.totalPrice;
        this.productsDTO=obj.productsDTO;
        this.registeredUserId = obj.registeredUserId;
        this.city = obj.city;
        this.address = obj.address;
    }
  }
  