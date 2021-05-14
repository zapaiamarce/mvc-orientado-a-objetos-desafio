import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const respuesta = minimist(argv)
  return {
    action: respuesta.action,
    params: JSON.parse(respuesta.params)
  };
}

function main() {
  const controller = new ContactsController
  const respuestaParseada = parseaParams(process.argv.slice(2))
  const resu = controller.processOptions(respuestaParseada)
  console.log(resu)
}

main();
