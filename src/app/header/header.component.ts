import { Component } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent
  {
  sampleClick: boolean = false;
  
  cartProductNumber: number = 0

  constructor(private _service: ProductService) {
   this._service.cartUpdated.subscribe((res) => {
    this.cartProductNumber = res
   })
  
  }
}
