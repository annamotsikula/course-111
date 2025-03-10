import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent
  implements OnInit,
  AfterViewInit,
  OnChanges {

  sampleClick: boolean = false;

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
  
    console.log('HEADER ngOnInit Called')
  }

  ngAfterViewInit(): void {
    console.log('HEADER ngAfterViewInit Called')


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGED CALLED')

  }
}
