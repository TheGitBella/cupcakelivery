import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('popover') popover: { event: Event; } | undefined;
  isOpen: boolean = false;
  formattedBirthday: string = '';
  registerForm: FormGroup;
  email: string = '';
  name: string = '';
  birthday: any = '';
  cep: number | '' = '';
  street: string = '';
  numberAddress: number | '' = '';
  cellphone: number | '' = '';
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      birthday: [''],
      cep: [''],
      street: ['', [Validators.required, Validators.minLength(6)]],
      numberAddress: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  presentPopover(birthday: any) {
    this.registerForm.get('birthday')?.setValue(birthday);
    this.formattedBirthday = new Date(birthday).toLocaleDateString('pt-BR')
    this.isOpen = !this.isOpen;
  }

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

  formatCellphone(cellphone: number) {
    const cleanCellphone = cellphone.toString().replace(/\D/g, '');
    const match = cleanCellphone.toString().match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    } else {
      return cleanCellphone.toString();
    }
  }
}
