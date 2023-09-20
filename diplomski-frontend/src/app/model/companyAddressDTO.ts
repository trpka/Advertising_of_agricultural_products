import { Address } from "./address";
import { Company } from "./company";
import { CompanyDTO } from "./companyDTO";

interface CompanyAddressInterface{
   companyDTO:CompanyDTO;
   address:Address;
  }
  export class CompanyAddress implements CompanyAddressInterface{
    companyDTO:CompanyDTO;
    address:Address;
    
    constructor(obj:CompanyAddressInterface){
        this.companyDTO=obj.companyDTO;
        this.address=obj.address;
    }
  }