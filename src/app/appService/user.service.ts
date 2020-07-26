import { Injectable } from '@angular/core';
import {Customer} from 'src/app/component/customer/customer.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    this._dataObservable = new BehaviorSubject(this.tableData)
  }

  private _dataObservable : BehaviorSubject<Customer[]>;

  
  public get dataObservable() {
    return this._dataObservable
  }
  

  tableData:Customer[]= [
    { id: 1, name: "saukat", address: "bbsr", mobile: "8984578469" },
    { id: 2, name: "mahee", address: "sagardi", mobile: "8986845786" },
    { id: 3, name: "saukat", address: "bbsr", mobile: "8984578469" },
    { id: 4, name: "mahee", address: "sagardi", mobile: "8986845786" },
    { id: 5, name: "saukat", address: "bbsr", mobile: "8984578469" },
  ];

  //getuserData
  getCustomerData():Customer[]{
   // console.log(this.tableData);
    return this.tableData;
  }

  pushCustomer(customer : Customer){
    customer.id = this.tableData.length
    this.tableData.push(customer)
    this._dataObservable.next(this.tableData)
  }
}
