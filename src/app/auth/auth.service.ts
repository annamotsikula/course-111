import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { API_URL, authToken } from '../core/constants/constants';
import { catchError, mergeMap, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from '../core/services/alert.service';

interface AuthUser {
  "id": 1,
  "username": "emilys",
  "email": "emily.johnson@x.dummyjson.com",
  "firstName": "Emily",
  "lastName": "Johnson",
  "gender": "female",
  "image": "https://dummyjson.com/icon/emilys/128",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // refreshToken in response and cookies
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http = inject(HttpClient);
  private _router = inject(Router);

  private _alertService = inject(AlertService);
  
  constructor(@Inject(API_URL) private _url: string) {}

  signIn(reponseBody: { email: string, password: string, expiresInMins?: number }) {
    const { email, password, expiresInMins } = reponseBody
    return this._http.post<AuthUser>(`${this._url}/auth/login`, { username: email, password, expiresInMins: expiresInMins || 60 }).pipe(
      tap(result => {
      
        localStorage.setItem(authToken, result.accessToken)
      }),
      mergeMap((result) => {
        this._alertService.success("You've successfully logged in")
        return this._router.navigate(['/home'])
      }),
      tap(() => { this._alertService.success("You've redirected to Products dashboard") }),
      catchError((err) => {
        console.log('Error in Auth Service,', err);
        return of(err)
      }),
    )
  }
}
