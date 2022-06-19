import { Injectable } from '@angular/core';
import { Product } from "../../models/product/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProduct() {
    let product: Product = {
      id: 0,
      title: "iPhone 2022",
      price: 225,
      description: "iPhone 2022 is the best product of 2022 with a good price"
    }

    return product;
  }
}
