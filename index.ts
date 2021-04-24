import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController;
  const parametrosParseados = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(parametrosParseados);
  console.log(resultado);
}

main();
