import {ContactsCollection} from "./models"
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  // console.log(resultado);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
const controlador= new ContactsController();
const parseado=parseaParams(process.argv.slice(2));
const result=controlador.processOptions(parseado);
console.log(result)

}

main();
