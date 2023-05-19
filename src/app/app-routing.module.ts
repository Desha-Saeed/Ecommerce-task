import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { NotfoudComponent } from './notfoud/notfoud.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: "",
    component: ItemsComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "cart/:id",
    component: CartComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "**",
    component: NotfoudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
