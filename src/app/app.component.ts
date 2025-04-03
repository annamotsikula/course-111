import { Component, ElementRef, ViewChild } from "@angular/core";
import { debounceTime, filter, first, from, fromEvent, last, map, mapTo, mergeMap, Observable, of, switchMap, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {

  numberObs$ = new Observable((observer) => {
    observer.next(1);
    observer.next(2)
    observer.next(10);
    observer.complete();
  })

  scores = of({current: 20000, max: 100000});
  
  schoolGrades = from([100,200,500, 200, 500, 1000])
  points: Observable<number> = of(100,200,500, 200, 500, 1000);

  @ViewChild('elem') btn!: ElementRef<HTMLInputElement>

  pushOnlyBigNumbers: (number|string)[] = []

  constructor() {

    
    // console.log(this.numberObs$);
    // this.numberObs$
    //   .subscribe({
    //     next: (res) => console.log(res),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('Finished Execution')
    //   })

    this.points.pipe(
      // first(),
      // last(),
      filter(singlePoint => singlePoint < 500),
      map(val => val*10 ),
      // filter(data => data < 2000 ),
      map(result =>{ 
        if(result === 1000 ) {
          return 'Minimum Limit'
        }
        return `New Value: ${result}`} ),
      tap((val)=> {
        this.pushOnlyBigNumbers.push(val)
      }),
      switchMap(() => this.scores),
      mergeMap(() => this.scores)



    )
    .subscribe((data) => console.log(data))
  }

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'input').pipe(
      map(event => event as PointerEvent),
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(700)
    )
    .subscribe(
      res => console.log(res)
    )

  }

}




/* 

  <h2>Pipes</h2>
       <p>Original Value: {{price}}</p>
       <p>Number Pipe: {{price | number: '0.0-0' }}</p>
       <p>Number Pipe: {{price | number: '1.3-5' }}</p>
       <p>Original Value: {{price | percent }}</p>
       <p>Original Value: {{price | currency: 'RUB' }}</p>

       <!-- JSON PIPE -->
       <h2>JSON Pipe</h2>

       <p>{{obj | json}}</p>
       <!-- String Pipe -->
       <h2>String Pipe</h2>
       <p>Original value: {{name}}</p>
       <p>{{name | uppercase}}</p>
       <p>{{name | lowercase}}</p>
       <p>{{name | titlecase}}</p>
       <p>{{name | slice: 4}}</p>
       <p>{{name | slice: 5 : 10}}</p>
       <br>
       <h2>KeyValue Pipe</h2>
       @for (item of obj | keyvalue; track item.key) {
        <div>{{ item.key }}:{{ item.value }}</div>
      }
       <!-- Date Pipe -->

       <p>{{today}}</p>
       <p>{{today | date: "short"}}</p>
       <p>{{today | date: "medium"}}</p>
       <p>{{today | date: "long"}}</p>
       <p>{{today | date: "yyyy"}}</p>*/