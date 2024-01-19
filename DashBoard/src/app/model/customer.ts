import { CustomerDocuments } from "./CustomerDocuments";
import { AccountDetails } from "./account-details";

import { CustomerAddress } from "./customer-address";
import { MedicalInfo } from "./medical-info";

export class Customer {
    customerID:number;
    customeName:string;
    customerDateOfBirth:string;
    customerAge:number;
    customerGender:string;
    customerEmail:string;
    customerMobileNo:any;
    
    CustomerDocuments:CustomerDocuments;
    customerAddress:CustomerAddress;
    accountDetails:AccountDetails;
    medicalInfo:MedicalInfo
}
