import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearParams(argv) {
  const answer = minimist(argv);
  if (answer.search) {
    return { search: answer.search };
  } else {
    return {};
  }
}

function main() {
  const args = process.argv.slice(2);
  const resultado = parsearParams(args);
  const prodCont = new ProductController();
  prodCont.processOptions(resultado).then((info) => {
    console.log(info);
  });
}

main();
