import { Component, inject } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { concatAll, forkJoin, from, mergeMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  productService = inject(ProductService);

  constructor() {

    this.productService.wishListProducts.pipe(
      mergeMap((res) => from(res)),
      // mergeMap(res => this.singleProduct(res)),
      mergeMap((res) => this.singleProduct(res)),

      toArray(),

    

    ).subscribe((result) => console.log(result))

    // forkJoin([this.productService.wishListProducts]).subscribe(res => console.log(res))




    // this.productService.wishListProducts.pipe(
    //   mergeMap((res) => forkJoin())
    //   // mergeMap((ids) => forkJoin(...ids))
    // ).subscribe(res => {
    //   console.log('Wishlist Component, product id:',res)
    // })
  }


  singleProduct(id: number) {
    return this.productService.getSingleProduct(id)
  }

}
