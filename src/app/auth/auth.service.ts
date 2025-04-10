import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../core/constants/constants';
import { catchError, mergeMap, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

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
  private _router = inject(Router)

  signIn(reponseBody: { email: string, password: string, expiresInMins?: number }) {
    const { email, password, expiresInMins } = reponseBody
    return this._http.post<AuthUser>(`${API_URL}/auth/login`, { username: email, password, expiresInMins: expiresInMins || 60 }).pipe(
      mergeMap((result) => {
        console.log('Please navigate to Home page')
        return this._router.navigate(['/home'])
      }),
      catchError((err) => of(err)),
      tap(result => { console.log('TAP OPERATOR ENTERED', result) }),
    )
  }
}
