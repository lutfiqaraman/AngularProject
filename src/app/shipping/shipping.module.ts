import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shippingcomponent/shipping.component';



@NgModule({
  declarations: [
    ShippingComponent
  ],
  exports: [
    ShippingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShippingModule { }
