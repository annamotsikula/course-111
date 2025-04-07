import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { delay, filter, fromEvent, map, mergeMap, Subscription, switchMap, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnDestroy {
  product: Product | undefined
  disableOnClick = false;

  displayMessage = false

  @ViewChild("btn") btn!: ElementRef<HTMLButtonElement>

  clickEventSubscription!: Subscription


  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    const routeParam = this._activatedRoute.snapshot.paramMap.get("id");
    // this.product = this._productService.getSingleProduct(Number(routeParam));

    this._productService.getSingleProduct(Number(routeParam)).pipe(
      tap((data) => console.log('Initial Source data: ', data)),
      tap(result => this.product = result),
      delay(200),
      filter(() => !!this.btn),
      switchMap(() => this.listenToClickEvent())
    ).subscribe(result => {
      console.log(result)
     


      // this.clickEventSubscription = this.listenToClickEvent();
    })
  }
  addToWishList() {
    this._productService.addProductToWishlist$.next(this._productService.addProductToWishlist$.value + 1);
    this._productService.wishListProducts.next([...this._productService.wishListProducts.value , (this.product?.id as number)])
    this.disableOnClick = true
  }


  listenToClickEvent() {
    return fromEvent(this.btn.nativeElement, 'click').pipe(
      map(res => res as PointerEvent),
      take(1),
      tap(() => {
        this.addToWishList();
        this.displayMessage = true
      }),
      mergeMap(() => timer(3000)),
      
      tap(() =>{
        this.displayMessage = false;
        console.log('Delete message')
      })

    )
  }

  addToCart() {

  }
  ngOnDestroy(): void {
    this.clickEventSubscription && this.clickEventSubscription.unsubscribe();
  }



}
