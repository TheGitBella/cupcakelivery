import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      console.log("Login successful:", this.loginForm.value);
    } else {
      console.log("Invalid form");
    }
  }

  register() {
    if (this.loginForm.valid) {
      console.log("Registration successful:", this.loginForm.value);
    } else {
      console.log("Invalid form");
    }
  }

  forgetPassword() {
    console.log("Forget password:", this.loginForm.value.email);
  }

}
