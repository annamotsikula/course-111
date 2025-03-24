import { Component } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { AppService } from '../core/services/app.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
  providers: [AppService]
})
export class ProductDashboardComponent {

  productList: Product[] = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      rating: 4.94,
      stock: 5,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      category: "furniture",
      price: 299.99,
      discountPercentage: 9.58,
      rating: 4.48,
      stock: 16,
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
    },
  ]


  constructor(public service: AppService) {

  }

}
