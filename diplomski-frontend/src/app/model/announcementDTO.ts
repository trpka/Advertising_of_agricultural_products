import { ProductDTO } from "./productDTO";

interface AnnouncementDTOInterface{
  id:number;
  title: string ;
  category: string ;
  subcategory: string;
  price:number;
  quantity: number;
  city:string;
  mobileNumber:string;
  registeredUserId: number;
  //productId: number;
  productDTO: ProductDTO;
}
export class AnnouncementDTO implements AnnouncementDTOInterface{
  id:number;
  title: string ;
  category: string ;
  subcategory: string;
  price:number;
  quantity: number;
  city:string;
  mobileNumber:string;
  registeredUserId: number;
  //productId: number;
  productDTO: ProductDTO;
  constructor(obj:AnnouncementDTOInterface){
      this.id=obj.id;
      this.title=obj.title;
      this.category=obj.category;
      this.subcategory=obj.subcategory;
      this.price=obj.price;
      this.quantity=obj.quantity;
      this.city = obj.city;
      this.mobileNumber=obj.mobileNumber;
      this.registeredUserId = obj.registeredUserId;
      //this.productId = obj.productId;
      this.productDTO = obj.productDTO;
  }
}
