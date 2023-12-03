import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})

export class ClientPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  divApp: string = 'catalog';
  tittle: string = '';

  constructor(
      private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      switch (id) {
        case 'catalog':
          this.divApp = 'catalog'
            this.tittle = "VITRINE VIRTUAL"
          break;
        case 'shopping':
          this.divApp = 'shopping'
          this.tittle = "CARRINHO"
          break;
        case 'profile':
          this.divApp = 'profile'
          this.tittle = "PERFIL"
          break;
        default:
          this.divApp = ''
          break;
      }
    });
    console.log(this.divApp)
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
