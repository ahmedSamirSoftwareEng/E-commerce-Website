import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({

    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]),
    confirmPassword: new FormControl('', Validators.required),
  },
  {
    validators: this.customPasswordMatching.bind(this) }
    );



    public customPasswordMatching(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { passwordMismatchError: true };
    }


  onRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
