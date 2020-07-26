import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/appService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerAllData:any=[];

  public form: FormGroup;
  public contactList: FormArray;

  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
    
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
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }

  
  // method triggered when form is submitted
  submit() {

    console.log(this.form.value);
    let customers : [] = this.form.value.contacts
    customers.forEach(e=>{
      this.userService.pushCustomer(e)
    })  
    this.router.navigate(['customerList']);
  }


  getCustomerData(){
    console.log(this.userService.getCustomerData());
    this.customerAllData=this.userService.getCustomerData();
  }
}
