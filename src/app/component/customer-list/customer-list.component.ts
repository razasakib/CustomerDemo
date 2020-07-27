import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/appService/user.service';
import { Customer } from '../customer/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tableData:Customer[]= [];
  displayedColumns: string[] = ['id','name', 'address', 'mobile'];
  dataSource = new MatTableDataSource<Customer>(this.tableData);

  constructor(private userService:UserService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCustmomerData();
  }

  getCustmomerData(){
    Object.assign(this.tableData , this.userService.getCustomerData())
    console.log(this.userService.getCustomerData());
  }

  //Filtering
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //pup up box
  onCreate(){
      this.dialog.open(CustomerComponent);
  }

}