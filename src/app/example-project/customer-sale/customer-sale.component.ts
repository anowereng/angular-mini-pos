import { Component } from '@angular/core';
import { SaleType } from '../sale-enum';

@Component({
  selector: 'app-customer-sale',
  templateUrl: './customer-sale.component.html',
  styleUrls: ['./customer-sale.component.css'],
})
export class CustomerSaleComponent {
  isActive: boolean = true;
  saleSettings: any;

  constructor() {
    this.saleSettings = {
      saleType: SaleType.Customer,
    };
  }
}
