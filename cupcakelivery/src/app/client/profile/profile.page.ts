import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userMock = {
    id: 1,
    name: 'Batman Robinho Shippuden',
    birthday: '10/10/1959',
    email: 'gothamcity@gmail.com',
    cellphone: '(32) 99258-4331',
  }

  constructor(
      private router: Router
  ) {}

  ngOnInit() {}

  editUser() {
    this.router.navigate(['/register'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }
}
