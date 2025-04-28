import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';
import { ProductDashboardComponent } from '../../product-dashboard/product-dashboard.component';
import { OnsaleDirective } from '../directives/onsale.directive';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { API_URL } from '../constants/constants';



@NgModule({
  declarations: [
    ProductComponent,
    OnsaleDirective,
    ProductDashboardComponent,
    ProductDetailsComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  providers: [
    { provide: API_URL, useValue: "https://fakejson.com" }
  ]
})
export class ProductsModule { }
