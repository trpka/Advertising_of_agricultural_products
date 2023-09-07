interface ProductDTOInterface{
  id:number;
  picture: string ;
  additional_description: string ;
  name: string ;
  registeredUserId: number;
  companyId: number;

}
export class ProductDTO implements ProductDTOInterface{
  id:number;
  picture: string ;
  additional_description: string ;
  name: string ;
  registeredUserId: number;
  companyId: number;


  constructor(obj:ProductDTOInterface){
      this.id=obj.id;
      this.picture=obj.picture;
      this.additional_description=obj.additional_description;
      this.name = obj.name;
      this.registeredUserId=obj.registeredUserId;
      this.companyId=obj.companyId;
  }
}
