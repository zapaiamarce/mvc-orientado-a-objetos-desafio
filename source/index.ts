import { ContactsController, ContactsControllerOptions } from "./controllers";
import {ContactsCollection}from "./models"
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
const result = minimist(argv)
  return {
    action: result.action,
    params: JSON.parse(result.params),
  };
}

function main() {const controller = new ContactsController();
  // const params = parseaParams(process.argv.slice(2))
  // const resultadoFinal = controller.processOptions(params)
  // console.log(resultadoFinal)
console.log(controller.contacts)
}



main();
