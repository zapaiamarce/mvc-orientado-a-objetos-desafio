import {ContactsCollection} from "./models"
import { ContactsController, ContactsControllerOptions,  } from "./controllers";
import * as minimist from "minimist"
import { argv, openStdin } from "process";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var resultado = minimist(argv)
  

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  var controller = new ContactsController
  var controllerOptions = parseaParams(process.argv.slice( 2 ))
  console.log(controller.processOptions(controllerOptions))
  
}

main();
