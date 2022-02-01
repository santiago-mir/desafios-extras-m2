import { Product, ProductCollection } from "./models";

class ProductController {
  products: ProductCollection;
  constructor() {
    var collec = new ProductCollection();
    this.products = collec;
  }
  processOptions(option) {}
}
