import { Product, ProductCollection } from "./models";
import { has } from "lodash";

class ProductController {
  productos: ProductCollection;

  constructor() {
    const collec = new ProductCollection(); //se instancia product collection
    this.productos = collec;
  }
  processOptions(option) {
    // si tiene search devuelva getById, sino getAll
    if (option.search) {
      return this.productos.getById(option.search);
    } else {
      return this.productos.getAll();
    }
  }
}

export { ProductController };
