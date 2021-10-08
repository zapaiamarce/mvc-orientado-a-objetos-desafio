import { ContactsCollection } from "./models"
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  //const resultado = minimist(argv);
  return {
    action: minimist(argv).action,
    params: JSON.parse(minimist(argv).params),
  };
}

function main() {
  //const params = parseaParams( process.argv.slice(2) );
  const controller = new ContactsController();
  console.log( controller.processOptions( parseaParams( process.argv.slice(2) ) ) )
}

main();
