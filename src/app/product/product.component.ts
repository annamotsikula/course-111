import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { ProductService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {

  @Input({ required: true }) product!: Product
  @Output() removeItem: EventEmitter<void> = new EventEmitter()

  stars = new Array(5)

  constructor(private _productService: ProductService, private _router: Router) {}

  ngOnInit() {
    const { discountPercentage, price } = this.product
    this.product.discountedPrice = discountPercentage ? price - (price * discountPercentage / 100) : undefined
  }

  addReview() {
    console.log('Clicked')
    this.stars.push(null)
  }
  updateCart() {
    console.log('Button Clicked')
    this._productService.cartUpdated.next(1)
  }

  gotoDetails() {
    this._router.navigate(['/product-dashboard', this.product.id])

  }

}
