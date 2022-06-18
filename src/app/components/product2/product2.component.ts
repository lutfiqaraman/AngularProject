import { Component } from "@angular/core";
import { ShortProduct } from "../../models/product/shortproduct";
import { ShortProduct2Service } from "../../services/shortproduct/shortproduct.service";

@Component({
  selector: 'app-product-2',
  templateUrl: 'product2.component.html',
  providers: [{ provide: ShortProduct2Service }]
})

export class Product2Component {
  product: ShortProduct;

  constructor(productSVC: ShortProduct2Service) {
    this.product = productSVC.getProduct();
  }
}
