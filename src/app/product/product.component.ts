import { Component, inject, Input } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { AppService } from '../core/services/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {

  @Input({ required: true }) product!: Product

  stars = new Array(5)

  constructor(public service: AppService) {
  }

  ngOnInit() {
    const { discountPercentage, price } = this.product
    this.product.discountedPrice = discountPercentage ? price - (price * discountPercentage / 100) : undefined
    console.log(this.product)

  }

  addReview() {
    console.log('Clicked')
    this.stars.push(null)
  }


}
