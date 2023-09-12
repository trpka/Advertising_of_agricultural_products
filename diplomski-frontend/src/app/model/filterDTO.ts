interface FilterDTOInterface{
  subcategories:string[];
  sort:string;
  city:string;

}
export class FilterDTO implements FilterDTOInterface{
  subcategories:string[];
  sort:string;
  city:string;

  constructor(obj:FilterDTOInterface){
      this.subcategories=obj.subcategories;
      this.sort=obj.sort;
      this.city=obj.city;
  }
}
