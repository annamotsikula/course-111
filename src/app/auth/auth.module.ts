import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { SharedComponentsModule } from '../core/components/components.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ], 

})
export class AuthModule { }
