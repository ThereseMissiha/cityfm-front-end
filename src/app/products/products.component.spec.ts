import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../shared/services/config.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],       
      imports: [
        HttpClientModule
      ],     
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [ConfigService],
          useFactory: (configService:ConfigService) => {
            return() => {
              return configService.loadAppConfig();
            }
          }
        },
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
