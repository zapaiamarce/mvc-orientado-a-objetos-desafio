import { argv } from "process";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parametros = require('minimist')(process.argv.slice(2))
  return {
    action: parametros._[0],
    params: parametros._[1],
  }
}

function main() {

  const prueba = new ContactsControllerOptions
  prueba.action = parseaParams(argv).action
  prueba.params = parseaParams(argv).params
  
  const pruebaContactControler = new ContactsController
  pruebaContactControler.processOptions(prueba)
  console.log(pruebaContactControler)

}

main();
