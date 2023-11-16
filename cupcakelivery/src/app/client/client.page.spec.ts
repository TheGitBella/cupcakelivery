import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';

describe('ClientPage', () => {
  let component: ClientPage;
  let fixture: ComponentFixture<ClientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
