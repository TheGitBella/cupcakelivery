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
  isAllowTerms: boolean = false;
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
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      birthday: [''],
      cep: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
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

  onSubmit() {
    if (!this.isAllowTerms) {
      console.log("Aceite os termos de uso");
    }
    if (this.isAllowTerms && this.registerForm.valid) {
      console.log("Registration successful:", this.registerForm.value);
    }
    else {
      console.log("Erro ao cadastrar!");
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

  formatCpf(cpf: number) {
    const cleanCpf = cpf.toString().replace(/\D/g, '');
    const match = cleanCpf.toString().match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    } else {
      return cleanCpf.toString();
    }
  }

  formatCep(cep: number) {
    const cleanCep = cep.toString().replace(/\D/g, '');
    const match = cleanCep.toString().match(/^(\d{5})(\d{3})$/);
    if (match) {
      return `${match[1]}-${match[2]}`;
    } else {
      return cleanCep.toString();
    }
  }

  onChangeToggleTerms() {
    this.isAllowTerms = !this.isAllowTerms;
    console.log(this.isAllowTerms)
  }
}
