import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'product-dashboard',
        loadChildren: () => import("./core/modules/products.module").then(m => m.ProductsModule)
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },

    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },


]



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
