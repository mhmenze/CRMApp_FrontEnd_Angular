import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  
  loginForm: FormGroup

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$')]]
    })
    this.loginForm.valueChanges.subscribe(console.log);
  }
  
  hide = true;  

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  get username(){
    return this.loginForm.get('username')
  }

  // get emailorusername(){
  //   return this.loginForm.get('email')||this.loginForm.get('username')
  // }

}


