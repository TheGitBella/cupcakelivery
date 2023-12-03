import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
itensMock = [
  {
    id: 1,
    product: "Cupcake de Morango",
    price: 15.50
  },
  {
    id: 2,
    product: "Cupcake de Pistache",
    price: 18
  },
  {
    id: 3,
    product: "Cupcake de Nutella com Ninho",
    price: 17
  },
  {
    id: 4,
    product: "Cupcake de Baunilha",
    price: 12.50
  }
]
  constructor(
      private router: Router
  ) {}

  ngOnInit() {}

  addToKart() {
    console.log("Adicionado")
  }

  formatPrice(price: number) {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);

    return formattedPrice;
  }

  goToShopping() {
    this.router.navigate(['/client/shopping'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }
}
