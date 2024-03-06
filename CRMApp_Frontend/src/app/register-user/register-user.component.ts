import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  registrationForm: FormGroup

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$')]]
    })
    this.registrationForm.valueChanges.subscribe(console.log);
  }
  
  hide = true;  

  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get username(){
    return this.registrationForm.get('username')
  }
}
