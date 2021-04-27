import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const parsearArgumentos = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
  const parsearInput = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  controller.processOptions(parsearInput)
}

main();
