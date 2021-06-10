import { SaleType, Discount } from './sale-enum';

export class Product {
  productId: number;
  name: string;
  salePrice: number;
  stock: number;

  constructor() {
    this.name = '';
    this.productId = 0;
    this.salePrice = 0;
    this.stock = 0;
  }
}

export class SaleModel implements ISaleModel {
  orderDate: string;
  toalAmount: number;
  totalQty: number;
  saleType: SaleType;
  saleDetails: SaleDetails[];
  discount: number;

  // getDiscountValue(): number {
  //   if (this.saleType == SaleType.Customer) {
  //     return Discount.Customer;
  //   } else if (this.saleType == SaleType.Dealer) {
  //     return Discount.Dealer;
  //   } else {
  //     return Discount.POS;
  //   }
  // }

  constructor() {
    this.saleType = SaleType.Unknown;
    this.saleDetails = [];
    this.orderDate = new Date().toDateString();
    this.totalQty = 0;
    this.toalAmount = 0;
    this.discount =  0 //this.getDiscountValue();
  }
}
export class SaleDetails extends Product {
  qty: number;
  amount: number;
  constructor() {
    super();
    this.qty = 0;
    this.amount = 0;
  }
}

export interface ISaleSettings {
  saleType: SaleType;
}

export interface ISaleModel {
  orderDate: string;
  toalAmount: number;
  totalQty: number;
  saleType: SaleType;
  discount: number;
  saleDetails: SaleDetails[];
}

// export interface SaleSettings {
//   salePersonType: SaleType;
// }
