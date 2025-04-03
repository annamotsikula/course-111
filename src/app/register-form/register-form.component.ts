import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { RegisterForm } from './form.type';
import { geoPhoneNumber } from '../core/validators/validators';

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
    emailAddress: new FormControl('test@test.com', {validators: [Validators.required, Validators.email], nonNullable: true}),
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
    ]),
    restrictedUser: new FormControl({value: false, disabled: true}, { nonNullable: true})
  }
);

  singleControl = new FormControl()
  constructor() {
  console.log(this.registerForm)
   
  }

  get skillsArray() {
    return this.registerForm.controls['skills'] as FormArray<any>
  }

  register() {
    // if(this.registerForm.valid) {
      console.log(this.registerForm.value)
      console.log(this.registerForm.getRawValue().restrictedUser)

    // } else {
      console.error('This form is not valid')
    // }

  }

  addNewControl(name: string, validators: ValidatorFn | ValidatorFn[]) {
    const newControl = new FormControl(null);
    newControl.addValidators(validators);
    //@ts-ignore
    this.registerForm.addControl(name, newControl);
    console.log(this.registerForm)
  }

  addPhoneNumber() {
    this.addNewControl('phoneNumber', [Validators.required, Validators.minLength(9), geoPhoneNumber]);
    this.addNewControl('countryCode', [Validators.required]);

    this.listenToPhoneNumberChanges();
  }

  listenToPhoneNumberChanges() {
    this.registerForm.controls['countryCode']?.valueChanges.subscribe(res => {
      console.log(res)
      if(res === '+995') {
        const phoneControl =this.registerForm.controls.phoneNumber;
        if(phoneControl) {
          phoneControl.setValue('+995123456');
          this.registerForm.controls.address.patchValue({city: 'Tbilisi'})
          // this.registerForm.controls.address.setValue({city: 'Tbilisi', country: '', street: 'stree 123'})
          phoneControl.setErrors({usaPhoneNumber: true});
          phoneControl.updateValueAndValidity();
        }
        
        console.log(this.registerForm)

      }
    })
  }

  resetForm() {
    this.registerForm.reset();
  }

}
