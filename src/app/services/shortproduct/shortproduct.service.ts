import { Injectable } from '@angular/core';
import { ShortProduct } from "../../models/product/shortproduct";

@Injectable({
  providedIn: 'root'
})

export class ShortProduct1Service {

  constructor() {
  }

  getProduct() {
    let product: ShortProduct = {
      name: 'iPhone 13'
    };

    return product;
  }
}

export class ShortProduct2Service {
  constructor() {
  }

  getProduct() {
    let product: ShortProduct = {
      name: 'Samsung Galaxy S22 Ultra'
    };

    return product;
  }
}
