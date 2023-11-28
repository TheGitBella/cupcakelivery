import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-driver',
  templateUrl: './delivery-driver.page.html',
  styleUrls: ['./delivery-driver.page.scss'],
})
export class DeliveryDriverPage implements OnInit {
  public deliveryDriver!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.deliveryDriver = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
