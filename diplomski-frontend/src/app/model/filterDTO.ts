interface FilterDTOInterface{
  subcategories:string[];
  sort:string;

}
export class FilterDTO implements FilterDTOInterface{
  subcategories:string[];
  sort:string;

  constructor(obj:FilterDTOInterface){
      this.subcategories=obj.subcategories;
      this.sort=obj.sort;
  }
}
