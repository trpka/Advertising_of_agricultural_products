import { ProductDTO } from "./productDTO";

interface AnnouncementDTOInterface{
  id:number;
  date:Date;
  title: string ;
  category: string ;
  subcategory: string;
  price:number;
  quantity: number;
  city:string;
  mobileNumber:string;
  enable:boolean;
  registeredUserId: number;
  //productId: number;
  productDTO: ProductDTO;
  companyId: number;
}
export class AnnouncementDTO implements AnnouncementDTOInterface{
  id:number;
  date:Date;
  title: string ;
  category: string ;
  subcategory: string;
  price:number;
  quantity: number;
  city:string;
  mobileNumber:string;
  enable:boolean;
  registeredUserId: number;
  //productId: number;
  productDTO: ProductDTO;
  companyId: number;
  constructor(obj:AnnouncementDTOInterface){
      this.id=obj.id;
      this.date=obj.date;
      this.title=obj.title;
      this.category=obj.category;
      this.subcategory=obj.subcategory;
      this.price=obj.price;
      this.quantity=obj.quantity;
      this.city = obj.city;
      this.mobileNumber=obj.mobileNumber;
      this.enable=obj.enable;
      this.registeredUserId = obj.registeredUserId;
      //this.productId = obj.productId;
      this.productDTO = obj.productDTO;
      this.companyId = obj.companyId;
  }
}
