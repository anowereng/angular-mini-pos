import { Component } from '@angular/core';
import { SaleType } from '../sale-enum';

@Component({
  selector: 'app-dealer-sale',
  templateUrl: './dealer-sale.component.html',
  styleUrls: ['./dealer-sale.component.css'],
})
export class DealerSaleComponent {
  isActive: boolean = true;
  saleSettings: any;

  constructor() {
    this.saleSettings = {
      saleType: SaleType.Dealer,
    };
  }
}
