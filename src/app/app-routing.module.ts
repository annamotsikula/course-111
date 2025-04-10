import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'auth',
    redirectTo: "",
  },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'register',
        component: RegisterFormComponent
      },
      {
        path: '',
        redirectTo: 'product-dashboard',
        pathMatch: 'full'
      },
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
