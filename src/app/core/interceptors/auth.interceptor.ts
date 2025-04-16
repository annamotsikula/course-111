import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, finalize, Observable } from "rxjs";
import { authToken } from "../constants/constants";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _loadingService: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loadingService.startLoading();
        let handledRequest: Observable<HttpEvent<any>>
        const token = localStorage.getItem(authToken) as string;
        if(token) {
            const clonedRequest = req.clone({
                setHeaders: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            handledRequest = next.handle(clonedRequest)
        } else {
            handledRequest = next.handle(req)
        }

        return handledRequest.pipe(
            delay(1000),
            finalize(() => this._loadingService.endLoading())
        )
    }

}

export function authInterceptor(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem(authToken) as string;
        if(token) {
            const clonedRequest = req.clone({
                setHeaders: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            return next.handle(clonedRequest)
        }
        return next.handle(req)
    
}