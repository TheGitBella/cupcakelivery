import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {}
  addToKart() {
    console.log("Adicionado")
  }
}
