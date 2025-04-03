import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/product.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productList: Product[] = [
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
    {
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 1.97,
      "rating": 2.96,
      "stock": 9,
      "tags": [
        "fruits"
      ],
      "sku": "QTROUV79",
      "weight": 8,
      "dimensions": {
        "width": 8.29,
        "height": 5.58,
        "depth": 12.41
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Logan Lee",
          "reviewerEmail": "logan.lee@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Grayson Coleman",
          "reviewerEmail": "grayson.coleman@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 44,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "2517819903837",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "price": 12.99,
      "discountPercentage": 17.99,
      "rating": 2.83,
      "stock": 96,
      "tags": [
        "meat"
      ],
      "sku": "BWWA2MSO",
      "weight": 9,
      "dimensions": {
        "width": 23.35,
        "height": 13.48,
        "depth": 26.4
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ethan Martinez",
          "reviewerEmail": "ethan.martinez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Owen Fisher",
          "reviewerEmail": "owen.fisher@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 21,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "8335515097879",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "price": 8.99,
      "discountPercentage": 9.57,
      "rating": 2.88,
      "stock": 13,
      "tags": [
        "pet supplies",
        "cat food"
      ],
      "sku": "C3F8QN6O",
      "weight": 9,
      "dimensions": {
        "width": 15.4,
        "height": 13.97,
        "depth": 25.13
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aurora Barnes",
          "reviewerEmail": "aurora.barnes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ellie Stewart",
          "reviewerEmail": "ellie.stewart@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "5503491330693",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
    }
  ]
  private _cartList: number[] = [];

  cartUpdated = new Subject<number>();

  constructor() {


  }

  getProducts(): Product[] {
    return this._productList
  }

  getCartItems() {
    return this._cartList
  }

  addProduct(data: {title: string, price: number, category: Category, img: string}) {
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
    return this._productList.find(i => i.id === id)

  }

  removeProduct(id: number) {
    const index = this._productList.findIndex(i=> i.id === id);
    console.log(index)

    if(index !== -1) {
      this._productList.splice(index, 1)
      console.log(this._productList)
    } else {
      console.error(`There is no product with id : ${id}`)
    
    }


  }




}
