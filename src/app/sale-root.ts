import {
  Product,
  SaleDetails,
  SaleModel
} from './example-project/model';
import { Discount, SaleType } from './example-project/sale-enum';

export abstract class SaleRoot {
  model: SaleModel;

  constructor() {
    this.model = new SaleModel();
  }

  setDiscountValue(): void {
    if (this.model.saleType == SaleType.Customer) {
      this.model.discount = Discount.Customer;
    } else if (this.model.saleType == SaleType.Dealer) {
      this.model.discount = Discount.Dealer;
    } else {
      this.model.discount = Discount.POS;
    }
  }

  removeCart(saleDetails: SaleDetails) {
    let index = this.model.saleDetails.indexOf(saleDetails);
    this.model.saleDetails.splice(index, 1);
    this.updateTotalQtyAndAmount();
  }

  getPriceAmount(saleDetails: SaleDetails): void {
    saleDetails.amount = saleDetails.qty * saleDetails.salePrice;
    this.updateTotalQtyAndAmount();
  }

  updateTotalQtyAndAmount() {
    this.model.totalQty = 0;
    this.model.toalAmount = 0;
    this.model.saleDetails.forEach((saleDetail: SaleDetails) => {
      this.model.toalAmount += saleDetail.qty * saleDetail.salePrice;
      this.model.totalQty += saleDetail.qty;
    });
    this.model.toalAmount > 0
      ? (this.model.toalAmount -= this.model.discount)
      : 0;
  }

  addToCart(product: Product) {
    let isExist: boolean = this.model.saleDetails.some(
      (x) => x.productId == product.productId
    );
    if (isExist) {
      alert('product already exist');
      return;
    }

    let model: SaleDetails = this.newCartProduct(product);
    this.model.saleDetails.push(model);
    this.updateTotalQtyAndAmount();
  }

  newCartProduct(product: Product): SaleDetails {
    return {
      productId: product.productId,
      name: product.name,
      qty: 0,
      salePrice: product.salePrice,
      stock: product.stock,
      amount: 0,
    };
  }
}
