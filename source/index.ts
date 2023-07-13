import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argumentos = minimist(argv)
  // console.log(argumentos)

  return {
    action: argumentos.action,
    params: JSON.parse(argumentos.params),
  };
}

function main() {
  const peticion = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  const resultado = controller.processOptions(peticion);
  console.log(resultado)
}

main();
