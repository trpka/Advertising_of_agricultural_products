interface AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  date: Date;
  //company : Company;

}
export class Advertisement implements AdvertisementInterface{
  id:number;
  title: string ;
  text: string ;
  price: number ;
  image: string;
  date: Date;

  constructor(obj:AdvertisementInterface){
      this.id=obj.id;
      this.title=obj.title;
      this.text=obj.text;
      this.price = obj.price;
      this.image=obj.image;
      this.date=obj.date;
  }
}
