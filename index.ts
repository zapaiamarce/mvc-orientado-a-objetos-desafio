import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions{
  // parsear el argv usando https{}://www.npmjs.com/package/minimis  
  const resultado = minimist(argv);
  console.log(resultado);
  

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controlador = new ContactsController;

  console.log(controlador.processOptions(parseaParams(process.argv.slice(2))));

}

main();
