import * as jsonfile from "jsonfile";
class Product {
  id: number;
  name: string;
}
class ProductCollection {
  productos: Product[] = [];
  getAll() {
    const promiseData = jsonfile.readFile("./products.json");
    promiseData.then((productos) => {
      return productos;
    });
    return promiseData;
  }
  getById(id: number) {
    const promise = this.getAll();
    const respuesta = promise.then((productos) => {
      const answer = productos.find((prod) => {
        return prod.id == id;
      });
      return answer;
    });
    return respuesta;
  }
}

export { Product, ProductCollection };
