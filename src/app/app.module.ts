import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor, AuthInterceptor } from './core/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    NotFoundComponent,
    MainComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // provideHttpClient(
    //   withInterceptors([authInterceptor]),
    // )
  
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
