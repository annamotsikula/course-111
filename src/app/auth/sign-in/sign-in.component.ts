import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


type AuthForm = { email: FormControl<string>, password: FormControl<string>, rememberUser?: FormControl<boolean | null> }


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnDestroy {

  formBuilderService = inject(FormBuilder);
  authService = inject(AuthService);
  authForm: FormGroup<AuthForm>;

  constructor() {
    this.authForm = this.formBuilderService.group<AuthForm>({
      email: this.formBuilderService.nonNullable.control("emilys", [Validators.required]),
      password: this.formBuilderService.nonNullable.control("emilyspass", [Validators.required]),
      rememberUser: this.formBuilderService.control(false)
    });

    console.log('Constructor created')
  }


  onSubmit() {
    console.log(this.authForm)
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value
      if (email && password) {
        this.authService.signIn({ email, password })  
        .subscribe(result => {
          
          // console.log(result)
        }
        //   {
        //   next: (result) => {console.log(result)},
        //   error: (err) => console.log('Error Occured while signing the user, ' , err),
        //   complete: () => console.log('Request Completed!')
        // }
      )
      }
    } else {
      console.log('IVNALID')
    }

  }

  ngOnDestroy(): void {
    console.log('Component has destroyed!')
  }
}
