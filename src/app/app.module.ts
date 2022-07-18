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
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { OrderComponent } from './order/order.component';
import { OrderprocessorComponent } from './components/orderprocessor/orderprocessor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    Product2Component,
    TwoWayBindingComponent,
    HomeComponent,
    PagenotfoundComponent,
    OrderComponent,
    OrderprocessorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShippingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
