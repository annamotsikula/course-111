import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { Alert, AlertOptions, PopUpType } from "../interfaces/alert.model";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private emitAlert = new Subject<Alert>();

    displayTime = 2000;

    private id = 0;


    onAlert() {
        return this.emitAlert.asObservable().pipe(
            tap((res) => res.message && this.id++)
        )
    }
    get currentAlertId() {
        return this.id
    }

    onClose() {
        this.emitAlert.next(new Alert())
    }

    warn(message: string, opt?: AlertOptions) {
        this.displayAlert(message, PopUpType.Warning, opt)
    }

    success(message: string, opt?: AlertOptions) {
        this.displayAlert(message, PopUpType.Success, opt)
    }

    fail(message: string, opt?: AlertOptions) {
        this.displayAlert(message, PopUpType.Error, opt)
    }

    displayAlert(msg: string, type: PopUpType, opt?: AlertOptions) {
        this.emitAlert.next(new Alert({ message: msg, type, displayTime: this.displayTime, ...opt, id: this.id }))
    }
}