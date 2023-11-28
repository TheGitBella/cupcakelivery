import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  email: string = '';
  name: string = '';
  birthday: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      birthday: ['']
    });
  }

  ngOnInit() {}

  register() {
    if (this.registerForm.valid) {
      console.log("Registration successful:", this.registerForm.value);
    } else {
      console.log("Invalid form");
    }
  }

  goBack() {
    this.location.back()
  }

}
