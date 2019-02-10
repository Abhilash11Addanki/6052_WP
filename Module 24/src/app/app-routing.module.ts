import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'productinfo', component: ProductinfoComponent},
  {path: 'searchproducts', component: SearchproductsComponent},
  {path: 'user', component: UserComponent},
  {path: 'searchproducts/:search', component: SearchproductsComponent},
  {path : 'productinfo/:searchdata', component: ProductinfoComponent},
  {path: 'searchproducts/:id', component: SearchproductsComponent},
  {path: 'searchproducts/:id', component: SearchproductsComponent},
  {path: 'searchproducts/:id', component: SearchproductsComponent},
  

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent, CheckoutComponent, ProductinfoComponent, HomeComponent, LoginComponent, SignupComponent, SearchproductsComponent, PageNotFoundComponent, UserComponent]
