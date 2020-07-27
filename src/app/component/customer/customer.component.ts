import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/appService/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerAllData:any=[];

  public form: FormGroup;
 // public contactList: FormArray;
  public customerList: FormArray;

  // returns all form groups under customer
  get customerFormGroup() {
    return this.form.get('contacts') as FormArray;
  }


  constructor(private fb: FormBuilder,private dialog: MatDialog,private userService:UserService,private router:Router) {}

  ngOnInit() {

    this.form = this.fb.group({
      contacts: this.fb.array([this.createContact()])
    });

    // set customerList to this field
    this.customerList = this.form.get('contacts') as FormArray;
    
    this.userService.dataObservable.subscribe({
      next : (users)=>{
        this.getCustomerData();
      }
    })

  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      name: [null,Validators.required], // i.e Email, Phone
      address: [null,Validators.required], // i.e. Home, Office
      mobile: [null,Validators.required]
    });
  }

  // add a contact form group
  addContact() {
    this.customerList.push(this.createContact());
  }

  // remove customer from group
  removeContact(index) {
    // this.customerList = this.form.get('contacts') as FormArray;
    this.customerList.removeAt(index);
  }

  
  // method triggered when form is submitted
  submit() {
     
    console.log(this.form.value);
    debugger;
    let customers : [] = this.form.value.contacts
    customers.forEach(e=>{
      this.userService.pushCustomer(e)
    })  
    this.dialog.closeAll();
    this.form.reset();

    this.router.navigate(['leads']);
  }


  getCustomerData(){
    console.log(this.userService.getCustomerData());
    this.customerAllData=this.userService.getCustomerData();
  }
}
