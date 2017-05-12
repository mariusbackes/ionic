import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /* Ein weg um zwischen Seiten zu wechseln */

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers() {
    this.navCtrl.push(UsersPage)
      .catch((error) => {
        console.log("Acces denied, argument was: " + error)
      });
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }
  /* Anderer Weg zwischen seiten zu wechseln */
  usersPage = UsersPage;
}
