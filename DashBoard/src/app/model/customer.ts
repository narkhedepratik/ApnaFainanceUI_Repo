import { CustomerDocuments } from "./CustomerDocuments";
import { AccountDetails } from "./account-details";

import { CustomerAddress } from "./customer-address";
import { MedicalInfo } from "./medical-info";

export class Customer {
    customerId:number;
    customeName:string;
    customerDateOfBirth:string;
    customerAge:number;
    customerGender:string;
    customerEmail:string;
    customerMobileNumber:any;
    
    customerDocuments:CustomerDocuments;
    customerAddress:CustomerAddress;
    accountDetails:AccountDetails;
    medicalInfo:MedicalInfo
}
