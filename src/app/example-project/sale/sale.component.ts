import { Component, Input, OnInit } from '@angular/core';
import { SaleRoot } from 'src/app/sale-root';
import { Product, ISaleSettings } from '../model';
import { SaleData } from '../sale-data';
import { SaleType } from '../sale-enum';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent extends SaleRoot implements OnInit {

  @Input() saleSettings: any;
  products: Product[];

  constructor() {
    super();
    this.products = [];
  }

  ngOnInit() {
    this.products = SaleData.getAllProducts();
    this.activate(this.saleSettings);
  }

  activate(settings: ISaleSettings): void {
    this.model.saleType = settings.saleType;
    this.setDiscountValue();
  }

  save(): any {
    return this.model;
  }

  getEnumToString(): string{
    return SaleType[this.saleSettings.saleType]
  }
}
