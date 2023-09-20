interface AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  startDate: Date;
  endDate: Date;
  enable:boolean;
  companyId : number;

}
export class Advertisement implements AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  startDate: Date;
  endDate: Date;
  enable:boolean;
  companyId : number;

  constructor(obj:AdvertisementInterface){
      this.id=obj.id;
      this.title=obj.title;
      this.text=obj.text;
      this.price = obj.price;
      this.image=obj.image;
      this.startDate=obj.startDate;
      this.endDate=obj.endDate;
      this.enable=obj.enable;
      this.companyId=obj.companyId;
  }
}
