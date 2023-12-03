import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  constructor(
      private router: Router
  ) {}

  ngOnInit() {}

  goToShopping() {
    this.router.navigate(['/client/catalog'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }

}
