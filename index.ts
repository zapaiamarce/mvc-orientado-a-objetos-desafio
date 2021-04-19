import {ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
   return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const prueba = new ContactsController
  const parsearargv = parseaParams(process.argv.slice(2))
  const resultado = prueba.processOptions(parsearargv);
  console.log (resultado);

  
}


main();
