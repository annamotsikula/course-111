import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
router = inject(Router)

constructor() {
  this.router.events.subscribe((res) => {
    console.log(res)
  })
}
}
