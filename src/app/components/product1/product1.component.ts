import { Component } from "@angular/core";
import { ShortProduct } from "../../models/product/shortproduct";
import { ShortProduct1Service } from "../../services/shortproduct/shortproduct.service";

@Component({
  selector: 'app-product-1',
  templateUrl: 'product1.component.html',
  providers: [{ provide: ShortProduct1Service }]
})

export class Product1Component {

  product: ShortProduct;

  constructor(productSVC: ShortProduct1Service) {
    this.product = productSVC.getProduct();
  }

}
