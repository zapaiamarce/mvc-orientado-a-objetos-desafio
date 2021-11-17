import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const argumento = minimist(argv);
  return {
    action: argumento.action,
    params: JSON.parse(argumento.params),
  };
}

function main() {
  const controller = new ContactsController();
  const parametros = parseaParams(process.argv.slice(2));
  const salida = controller.processOptions(parametros);
  console.log(salida);
}

main();
