import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CardsComponent } from './items/cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockPipe } from './pipes/stock.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { NotfoudComponent } from './notfoud/notfoud.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CutTextPipe } from './pipes/cut-text.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CardsComponent,
    NavbarComponent,
    StockPipe,
    LoginComponent,
    SignupComponent,
    CartComponent,
    NotfoudComponent,
    DetailsComponent,
    CutTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
