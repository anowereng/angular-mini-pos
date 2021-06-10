import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaleComponent } from './customer-sale.component';

describe('CustomerSaleComponent', () => {
  let component: CustomerSaleComponent;
  let fixture: ComponentFixture<CustomerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
