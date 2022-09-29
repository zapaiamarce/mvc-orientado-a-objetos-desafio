import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const res = minimist(argv);
  return {
    action: res.action,
    params: JSON.parse(res.params),
  };
}

function main() {}
const controlador = new ContactsController();
const parametros = parseaParams(process.argv.slice(2));
console.log(parametros);
const resultado = controlador.processOptions(parametros);
console.log(resultado);
main();
