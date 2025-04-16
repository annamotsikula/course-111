import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading$ = new Subject<boolean>();

  loading$: Observable<boolean>



  constructor() { 
    this.loading$ = this._isLoading$.asObservable();
  }


  startLoading() {
    this._isLoading$.next(true)

  }

  endLoading() {
    this._isLoading$.next(false)
  }
}
