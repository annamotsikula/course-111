import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AppService]
})
export class HeaderComponent
  {

  sampleClick: boolean = false;
  appService = inject(AppService)

  // constructor() {
  //   console.log('Constructor')
  // }

  // ngOnInit(): void {
  
  //   console.log('HEADER ngOnInit Called')
  // }

  // ngAfterViewInit(): void {
  //   console.log('HEADER ngAfterViewInit Called')


  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('CHANGED CALLED')

  // }
}
