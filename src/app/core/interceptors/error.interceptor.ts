import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, of, throwError } from "rxjs";
import { AlertService } from "../services/alert.service";

export const errorInterceptorFunc: HttpInterceptorFn = (req, next): any => {
    const alertService = inject(AlertService)
    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            const errorHandlingData = {
                statusCode: err.status,
                error: err.error.message,
                hasError: true
            }
            alertService.fail(err.error.message)

            return throwError(() => errorHandlingData)
            // const newReqResponse = new HttpResponse({body: errorHandlingData, status: 200})
            // return of(newReqResponse)
        })
    )
}