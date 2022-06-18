import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductComponent } from "./components/product/product.component";
import {Product1Component} from "./components/product1/product1.component";
import {Product2Component} from "./components/product2/product2.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
