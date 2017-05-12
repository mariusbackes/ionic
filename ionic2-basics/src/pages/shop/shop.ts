import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BuyoutPage} from "./buyout/buyout";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})

export class ShopPage {
  products = ['Milk', 'Bread', 'Apples'];

  constructor(private navCtrl: NavController) {

  }

  onGoToBuyout(product: string) {
    this.navCtrl.push(BuyoutPage, {
      product: product
    });
  }

}
