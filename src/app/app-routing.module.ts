import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
   pathMatch:'full'
},
{
  path:'products', component:ProductsComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'register', component:RegisterComponent
},
{
  path:'cart', component:CartComponent
},{
path:'product/:id', component:ProductDetailsComponent
},
{
  path:'**',
  redirectTo:''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
