import { Injectable } from '@angular/core';
import { Product } from "../../models/product/product";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProduct() {

    let product: Product = {
      id: 0,
      title: "iPhone 2022",
      price: 250,
      description: "iPhone 2022 is the best product of 2022 with a good price"
    }

    return product;
  }
}
