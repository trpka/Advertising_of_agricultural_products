interface RegisteredUserInterface{
  firstName1: string ;
  lastName1: string ;
  announcements: [];
  products:[];

}
export class RegisteredUser implements RegisteredUserInterface{
  firstName1: string ;
  lastName1: string ;
  announcements: [];
  products:[];
  constructor(obj:RegisteredUserInterface){
      this.firstName1=obj.firstName1;
      this.lastName1=obj.lastName1;
      this.announcements=obj.announcements;
      this.products=obj.products;
  }
}
