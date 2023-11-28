import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      console.log("Login successful:", this.loginForm.value);

      this.router.navigate(['/client/dashboard']).then(() => {
      });
    } else {
      console.log("Invalid form");
    }
  }

  register() {
    this.router.navigate(['/register'])
      .then(nav => {
        return;
      }, err => {
        console.error(err);
      });
  }

  forgetPassword() {
    console.log("Forget password:", this.loginForm.value.email);
  }

}
