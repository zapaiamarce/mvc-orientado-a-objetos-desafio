import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  const argvParse = minimist(argv);

  return {
    action: argvParse.action,
    params: JSON.parse(argvParse.params)
  };
}

function main() {
  const control = new ContactsController();
  const parseo = parseaParams(process.argv.slice(2));
  const resultado = control.processOptions(parseo);

  console.log(resultado);
}

main();
