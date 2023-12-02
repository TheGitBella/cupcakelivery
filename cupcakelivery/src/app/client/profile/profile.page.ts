import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
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
    private location: Location
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
}
