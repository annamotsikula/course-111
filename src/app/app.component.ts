import { Component, ElementRef, ViewChild } from "@angular/core";
import { concatMap, debounceTime, delay, filter, first, from, fromEvent, last, map, mapTo, mergeMap, Observable, of, switchMap, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {

  // numberObs$ = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2)
  //   observer.next(10);
  //   observer.complete();
  // })

  // scores = of({current: 20000, max: 100000});
  
  // schoolGrades = from([100,200,500, 200, 500, 1000])
  // points: Observable<number> = of(100,200,500, 200, 500, 1000);

  // @ViewChild('elem') btn!: ElementRef<HTMLInputElement>

  // pushOnlyBigNumbers: (number|string)[] = []

  // constructor() {

    
  //   // console.log(this.numberObs$);
  //   // this.numberObs$
  //   //   .subscribe({
  //   //     next: (res) => console.log(res),
  //   //     error: (err) => console.log(err),
  //   //     complete: () => console.log('Finished Execution')
  //   //   })

  //   this.points.pipe(
  //     // first(),
  //     // last(),
  //     filter(singlePoint => singlePoint < 500),
  //     map(val => val*10 ),
  //     // filter(data => data < 2000 ),
  //     map(result =>{ 
  //       if(result === 1000 ) {
  //         return 'Minimum Limit'
  //       }
  //       return `New Value: ${result}`} ),
  //     tap((val)=> {
  //       this.pushOnlyBigNumbers.push(val)
  //     }),
  //     switchMap(() => this.scores),
  //     mergeMap(() => this.scores)



  //   )
  //   .subscribe((data) => console.log(data))
  // }

  // ngAfterViewInit() {
  //   fromEvent(this.btn.nativeElement, 'input').pipe(
  //     map(event => event as PointerEvent),
  //     map(event => (event.target as HTMLInputElement).value),
  //     debounceTime(700)
  //   )
  //   .subscribe(
  //     res => console.log(res)
  //   )

  // }

//   getProductsForCategory(category:any) {
//     return of(`Products for category: ${category}`).pipe(delay(1000));
//   }
  
//   productCategories$ = of('Electronics', 'Clothing', 'Books');
  
//  ngOnInit() {
//   this.productCategories$
//   .pipe(
//     concatMap(category => this.getProductsForCategory(category)) 
//   )
//   .subscribe({
//     next: products => console.log(products),
//     complete: () => console.log('All product categories loaded')
//   });
//  }

}