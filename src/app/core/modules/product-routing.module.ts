import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from '../../product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { productResolver } from '../resolvers/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductDashboardComponent,
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
    resolve: { product: productResolver, }
  },
]



@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
