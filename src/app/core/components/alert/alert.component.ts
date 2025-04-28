import { Component, inject } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Alert, PopUpType } from '../../interfaces/alert.model';
import { delay, filter, tap } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  alertService = inject(AlertService);

  alerts: Alert[] = []

  constructor() {
    this.alertService.onAlert().pipe(
      filter(result => !!result.message),
      tap(onAlert => {
        this.alerts.push(onAlert);
      }),
    ).subscribe(onAlert => {




      setTimeout(() => {

        const index = this.alerts.findIndex(i => i.id === onAlert.id);
        if (index !== -1) {
          this.alerts.splice(index, 1);
        }

      }, onAlert.displayTime)


    })


    // setTimeout(() => {
    //   this.alertService.onClose()
    // }, 3000)
  }

}
