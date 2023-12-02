import { Component } from '@angular/core';
// import { TypeUserEnum } from "../../../firebase/src/app/models/enums/typeUser.enum";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  typeUser: 'CLIENT' | 'ADMIN' | 'DELIVERY_DRIVER';
  usersMock = [
      {
        id: 1,
        name: "Gustavo",
        typeUser: "CLIENT"
      },
      {
        id: 2,
        name: "Bella",
        typeUser: "ADMIN"
      },
      {
        id: 3,
        name: "Batman",
        typeUser: "DELIVERY_DRIVER"
      },
    ]

  public appClientPages = [
    { title: 'Perfil', tag: 'profile', url: '/client/profile', icon: 'person' },
    { title: 'Carrinho', tag: 'shopping', url: '/client/shopping', icon: 'cart' },
    { title: 'Vitrine Virtual', tag: 'catalog', url: '/client/catalog', icon: 'grid' },
    { title: 'Detalhes do Pedido', tag: 'order', url: '/client/order', icon: 'receipt' },
    { title: 'Histórico de Pedidos', tag: 'historic', url: '/client/historic', icon: 'time' },
    { title: 'Feedback', tag: 'feedback', url: '/client/feedback', icon: 'star' },
  ];

  public appAdminPages = [
    { title: 'Perfil', url: '/client/profile', icon: 'person' },
    { title: 'Vitrine Virtual', url: '/client/catalog', icon: 'grid' },
    { title: 'Histórico de Pedidos', url: '/client/historic', icon: 'time' },
  ];

  public appDeliveryDriverPages = [
    { title: 'Perfil', url: '/client/profile', icon: 'person' },
    { title: 'Detalhes do Pedido', url: '/client/order', icon: 'receipt' },
    { title: 'Histórico de Pedidos', url: '/client/historic', icon: 'time' },
  ];
/*  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor() {
    // this.typeUser = TypeUserEnum.CLIENT;
    this.typeUser = "CLIENT";
  }

}
