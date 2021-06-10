import { Product } from "./model";

export class  SaleData {

  constructor(){

  }
  static getAllProducts(): Product[] {
      return [
          { productId: 1, name: 'Product-1', salePrice: 500, stock: 50 },
          { productId: 2, name: 'Product-2', salePrice: 25.89, stock: 10 },
          { productId: 3, name: 'Product-3', salePrice: 58.99, stock: 30 },
          { productId: 4, name: 'Product-4', salePrice: 78.47, stock: 50 },
          { productId: 5, name: 'Product-5', salePrice: 100, stock: 45 },
          { productId: 6, name: 'Product-6', salePrice: 700, stock: 78 },
      ]
  }
}
