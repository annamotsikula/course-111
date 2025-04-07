import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/product.interface';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { productList } from './product-list';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';
import { FetchProduct } from '../interfaces/fetch-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productList: Product[] = []

  addProductToWishlist$ = new BehaviorSubject<number>(0);
  wishListProducts = new BehaviorSubject<number[]>([]);

  private _cartList: number[] = [];

  cartUpdated = new Subject<number>();

  constructor(private _http: HttpClient) { }


  fetchAllproduct() {
    return this._http.get<FetchProduct>(`${API_URL}/products`).pipe(
      map(response => response.products),
      map(productList =>
        productList.map(
          singleProduct =>
          ({
            ...singleProduct,
            discountedPrice: singleProduct.discountPercentage ? singleProduct.price - (singleProduct.price * singleProduct.discountPercentage / 100) : undefined
          }))),
      tap(res => {
        this._productList = res;
        console.log('All products loaded!')
      })
    )
  }

  getCartItems() {
    return this._cartList
  }

  addProduct(data: { title: string, price: number, category: Category, img: string }) {
    const newProduct: Product = {
      title: data.title,
      price: data.price,
      category: data.category,
      rating: 5,
      thumbnail: data.img,
      description: '',
      stock: 100,
      id: this._productList.length + 1
    }
    console.log(`Product will be added:`, newProduct)
    this._productList = [...this._productList, newProduct]

  }

  getSingleProduct(id: number) {
    return this._http.get<Product>(`${API_URL}/products/${id}`)
  }

  removeProduct(id: number) {
    const index = this._productList.findIndex(i => i.id === id);
    console.log(index)

    if (index !== -1) {
      this._productList.splice(index, 1)
      console.log(this._productList)
    } else {
      console.error(`There is no product with id : ${id}`)

    }


  }




}
