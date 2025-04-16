import { inject, Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService);
  const id = Number(route.paramMap.get('id'));
  return productService.getSingleProduct(id);
};


@Injectable()
export class ProductResolver implements Resolve<any> {
  // productService = inject(ProductService);

  constructor(private _productService: ProductService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = Number(route.paramMap.get('id'));
    return this._productService.getSingleProduct(id);
  }

}