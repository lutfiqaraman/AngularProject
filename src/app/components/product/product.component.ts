import { Component } from "@angular/core";
import { Product } from "../../models/product/product";

import { ProductService } from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'di-product-page',
  templateUrl: 'product.component.html',
  providers: [ProductService]
})

export class ProductComponent {
  product: Product;
  productID: string | null | undefined;
  productIDFromRoute: number;

  constructor(productSvc: ProductService, route: ActivatedRoute) {
    this.product = productSvc.getProduct();
    this.productIDFromRoute = Number(route.paramMap.subscribe(
      params => this.productID = params.get('id')
    ));
  }

  ngOnInit() {
    this.productID = this.productIDFromRoute.toString();
  }
}
