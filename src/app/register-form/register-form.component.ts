import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegisterForm } from './form.type';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  skillsCheckBox = ["Angular", "TypeScript", 'JS']


  // name, lastname 

  // firstname
  registerForm: FormGroup<RegisterForm> = new FormGroup<RegisterForm>({
    emailAddress: new FormControl(null, [Validators.required, Validators.email]),
    fullName: new FormControl(null, [Validators.minLength(15)]),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    }),
    skills: new FormArray([
      new FormControl(false, [Validators.requiredTrue]),
      new FormControl(false),
      new FormControl(false)
    ])
  }
);

  singleControl = new FormControl()
  constructor() {
    console.log(this.registerForm)
    // console.log(this.skillsArray.controls)
  }

  get skillsArray() {
    return this.registerForm.controls['skills'] as FormArray<any>
  }

  register() {
    if(this.registerForm.valid) {
      console.log(this.registerForm)

    } else {
      console.error('This form is not valid')
    }

  }

  log() {
    console.log(this.skillsArray)
  }

}
