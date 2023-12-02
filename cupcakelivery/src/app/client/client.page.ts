import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})

export class ClientPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  divApp: string = '';
  tittle: string = '';

  constructor() {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      switch (id) {
        case 'catalog':
          this.divApp = 'catalog'
            this.tittle = "VITRINE VIRTUAL"
          break;
        case 'profile':
          this.divApp = 'profile'
          this.tittle = "Perfil"
          break;
        default:
          this.divApp = ''
          break;
      }
    });
    console.log(this.divApp)
  }
}
