import { Component } from "@angular/core";
import { Product } from "../../models/product/product";

import { ProductService } from "../../services/product/product.service";

@Component({
  selector: 'di-product-page',
  templateUrl: 'product.component.html',
  providers: [ProductService]
})

export class ProductComponent {
  product: Product;

  constructor(productSvc: ProductService) {
    this.product = productSvc.getProduct();
  }
}
