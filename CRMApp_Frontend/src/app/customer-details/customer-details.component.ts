import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customerDetailsForm: FormGroup;

  constructor(private fb: FormBuilder){ }
  ngOnInit(): void {
    this.customerDetailsForm = this.fb.group({
      userID:'007',
      firstName:'James',
      lastName:'Bond',
      email:'dontfwith@bond',
      phoneNo:'00700777',
      address:'221B Baker Street',
      type:'Cold Call'
    })
    this.customerDetailsForm.valueChanges.subscribe(console.log);
  }
  
  get firstName(){
    return this.customerDetailsForm.get('firstName')
  }
  get lastName(){
    return this.customerDetailsForm.get('lastName')
  }
  get email(){
    return this.customerDetailsForm.get('email')
  }
  get phoneNo(){
    return this.customerDetailsForm.get('phoneNo')
  }
  get address(){
    return this.customerDetailsForm.get('address')
  }
  get type(){
    return this.customerDetailsForm.get('type')
  }
  get userID(){
    return this.customerDetailsForm.get('userID')
  }

}
