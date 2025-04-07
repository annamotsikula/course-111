import { Component, inject, OnInit } from '@angular/core';
import { Category, Product } from '../core/interfaces/product.interface';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent implements OnInit {
  service = inject(ProductService);

  productList: Product[] = [];
  toggleForm: boolean = false;

  inputData = {
    title: "",
    price: null,
    category: ""
  }
  cateogryList: {name: string, category: Category | "", disabled?: boolean}[] = [
    {
      name: 'Choose Category',
      category: "",
      disabled: true
    },
    {
      name: "Beauty & Skincare",
      category: "beauty"
    },
    {
      name: "Indoor & Exterior",
      category: "furniture"
    },
    {
      name: "Electonic Devices",
      category: "gadget"
    },
    {
      name: "Market Goods",
      category: "groceries"
    }
  ]

  ngOnInit() {
    this.service.fetchAllproduct().subscribe(response => this.productList = response)
    



  }

  deleteProductgById(product: Product) {
    console.log('Click detected', product)
    this.service.removeProduct(product.id)
  }

  submit() {
    console.log(this.inputData)
    const { title, price, category } = this.inputData;
    if(title === "" || price == null || category === "") {
      return;
    }
    const newProduct = {
      title,
      price,
      category: category as Category,
      img: "https://iplus.com.ge/images/detailed/9/MT233.jpeg"
    }
    
    this.service.addProduct(newProduct);
    this.inputData.title = ""
    this.inputData.price = null;
    this.inputData.category = "";
    this.toggleForm = false


  }

}

