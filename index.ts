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
  const object = new ContactsController();
  var argv = process.argv.slice(2);
  const argumentosParseados = parseaParams(argv);
  const mostrar = object.processOptions(argumentosParseados);
  console.log(mostrar);
}

main();
