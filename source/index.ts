import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv);
  return {
    action: args.action,
    params: JSON.parse(args.params),
  };
}

function main() {
  const controlador = new ContactsController();
  const option = parseaParams(process.argv.slice(2));
  console.log(option);
  const respuesta = controlador.processOptions(option);
  console.log(respuesta);
}

main();
