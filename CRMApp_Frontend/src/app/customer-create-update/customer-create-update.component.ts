import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.css']
})
export class CustomerCreateUpdateComponent implements OnInit {
  
  customerCreateUpdateForm: FormGroup;

  constructor(private fb: FormBuilder){ }
  ngOnInit(): void {
    this.customerCreateUpdateForm = this.fb.group({
      userID:'111',
      firstName:'',
      lastName:'',
      email:['', [Validators.required, Validators.email]],
      phoneNo:['', [ Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      address:'',
      type:''
    })
    this.customerCreateUpdateForm.valueChanges.subscribe(console.log);
  }
  
  get firstName(){
    return this.customerCreateUpdateForm.get('firstName')
  }
  get lastName(){
    return this.customerCreateUpdateForm.get('lastName')
  }
  get email(){
    return this.customerCreateUpdateForm.get('email')
  }
  get phoneNo(){
    return this.customerCreateUpdateForm.get('phoneNo')
  }
  get address(){
    return this.customerCreateUpdateForm.get('address')
  }
  get type(){
    return this.customerCreateUpdateForm.get('type')
  }
  get userID(){
    return this.customerCreateUpdateForm.get('userID')
  }

}
