import { Component, inject } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sampleClick: boolean = false;

  cartProductNumber: number = 0;

  constructor(private _service: ProductService, private _router: Router) {
    this._service.addProductToWishlist$.subscribe((res) => {
      console.log('Reponse arrived From Products Details', res)
      this.cartProductNumber = res
    })
  }

  redirect() {
    this._router.navigate(['/wishlist'])
  }
}
