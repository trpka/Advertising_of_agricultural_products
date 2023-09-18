interface AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  date: Date;
  duration: number;
  enable:boolean;
  companyId : number;

}
export class Advertisement implements AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  date: Date;
  duration: number;
  enable:boolean;
  companyId : number;

  constructor(obj:AdvertisementInterface){
      this.id=obj.id;
      this.title=obj.title;
      this.text=obj.text;
      this.price = obj.price;
      this.image=obj.image;
      this.date=obj.date;
      this.duration=obj.duration;
      this.enable=obj.enable;
      this.companyId=obj.companyId;
  }
}
