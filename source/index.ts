import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const contactsController = new ContactsController();
  const args = parseaParams(process.argv.slice(2));
  const resultado = contactsController.processOptions(args);
  console.table(resultado);
}

main();
