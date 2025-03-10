import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = "My First Angular App";

  isWinter: boolean = false;
  userInput = "Test 123"
  imgSrc = "https://banner2.cleanpng.com/20180417/xve/avfo64zl4.webp";

  showResult(ev: Event) {
    const val = (ev.target as HTMLInputElement).value
    this.userInput = val;
  }



  ngOnInit(): void {
  
    console.log('APP ngOnInit Called')
  }

  ngAfterViewInit(): void {
    console.log('APP ngAfterViewInit Called')


  }



} 