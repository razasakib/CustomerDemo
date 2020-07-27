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
    { id: 1, name: "Saukat", address: "bbsr", mobile: "8984578469" },
    { id: 2, name: "Mahee", address: "sagardi", mobile: "7826548759" },
    { id: 3, name: "Animesh", address: "puri", mobile: "9114857485" },
    { id: 4, name: "Ajit", address: "ctc", mobile: "9864784558" },
    { id: 5, name: "santosh", address: "bbsr", mobile: "8984578469" },
    { id: 6, name: "Kalidaash", address: "khurda", mobile: "9116857485" },
    { id: 7, name: "bina", address: "palashpali", mobile: "9824784558" },
    { id: 8, name: "deva", address: "rasulgard", mobile: "8986578469" },
  ];

  //getuserData
  getCustomerData():Customer[]{
   // console.log(this.tableData);
    return this.tableData;
  }

  pushCustomer(customer : Customer){
    customer.id = this.tableData.length 
    customer.id++;
    this.tableData.push(customer)
    this._dataObservable.next(this.tableData)
  }
}
