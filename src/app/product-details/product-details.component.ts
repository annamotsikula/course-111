import { Component } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: Product | undefined
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    console.log(this._activatedRoute.snapshot)
    const routeParam = this._activatedRoute.snapshot.paramMap.get("id");
    this.product = this._productService.getSingleProduct(Number(routeParam))

  }

}
