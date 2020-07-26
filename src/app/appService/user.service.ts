import { Injectable } from '@angular/core';
import {Customer} from 'src/app/component/customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  customerData:any[]=[
    {id:"1",name:"saukat",address:"bbsr",mobile:"8984578469"},
    {id:"2",name:"mahee",address:"sagardi",mobile:"8986845786"}
  ];

  //getuserData
  getCustomerData():Customer[]{
    console.log(this.customerData);
    return this.customerData;
  }
}
