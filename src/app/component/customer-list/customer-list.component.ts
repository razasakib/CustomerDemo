import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/appService/user.service';
import { Customer } from '../customer/customer.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  
  ELEMENT_DATA:Customer[];
  displayedColumns: string[] = ['id','name', 'address', 'mobile'];
  dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getCustmomerData();
  }

  getCustmomerData(){
     

    this.ELEMENT_DATA=this.userService.getCustomerData();
  
    console.log(this.userService.getCustomerData());
  }

}
