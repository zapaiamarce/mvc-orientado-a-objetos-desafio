import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { parse } from "node:path";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const mini = minimist(argv);
  const objeto = {
    action: mini.action,
    params: JSON.parse(mini.params),
  };
  return objeto;
}

function main() {
  const terminal = parseaParams(process.argv.slice(2));
  console.log(terminal);

  const controller = new ContactsController();

  const controllerFunction = controller.processOptions(terminal);

  console.log(controllerFunction);
}

main();
