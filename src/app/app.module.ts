import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductComponent } from "./components/product/product.component";
import { Product1Component } from "./components/product1/product1.component";
import { Product2Component } from "./components/product2/product2.component";
import { ShippingModule } from "./shipping/shipping.module";
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    Product2Component,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShippingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
