import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { Product2Component } from "./components/product2/product2.component";
import { HomeComponent } from "./components/home/home.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import {ProductComponent} from "./components/product/product.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent},
  { path: 'vipproduct', component: Product2Component },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

