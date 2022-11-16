import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  const argumentos :any = minimist(argv)

  return {
    action: argumentos.action,
    params: (argumentos.params) ? JSON.parse(argumentos.params): false,
  };
}

function main() {
  const controlador = new ContactsController();
  const options = parseaParams(process.argv.slice(2));
  const resultado = controlador.processOptions(options);
  console.log(resultado);
  console.log(controlador.contacts.getAll())
}

main();
