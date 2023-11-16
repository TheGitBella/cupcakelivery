import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/client/profile', icon: 'person' },
    { title: 'Carrinho', url: '/client/shopping', icon: 'cart' },
    { title: 'Vitrine Virtual', url: '/client/catalog', icon: 'grid' },
    { title: 'Detalhes do Pedido', url: '/client/order', icon: 'receipt' },
    { title: 'Histórico de Pedidos', url: '/client/historic', icon: 'time' },
    { title: 'Feedback', url: '/client/feedback', icon: 'star' },
  ];
/*  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor() {}
}
