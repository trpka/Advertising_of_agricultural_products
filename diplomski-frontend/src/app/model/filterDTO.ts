interface FilterDTOInterface{
  subcategories:string[];
  sort:string;
  city:string;
  typeOfUser:string;
  typeOfAnnouncements:string;

}
export class FilterDTO implements FilterDTOInterface{
  subcategories:string[];
  sort:string;
  city:string;
  typeOfUser:string;
  typeOfAnnouncements:string;

  constructor(obj:FilterDTOInterface){
      this.subcategories=obj.subcategories;
      this.sort=obj.sort;
      this.city=obj.city;
      this.typeOfUser = obj.typeOfUser;
      this.typeOfAnnouncements = obj.typeOfAnnouncements;
  }
}
