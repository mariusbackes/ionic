import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit{
  product: string;

  constructor(private navParams: NavParams, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.product = this.navParams.get('product');
  }

  onBuy(){
    this.navCtrl.popToRoot();
  }
}
