import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const action = argv.action;
  const id = argv.id;
  const name = argv.name;
  const params = { id, name };
  return {
    action,
    params,
  };
}

function main() {
  const parametrosDeEntrada = minimist(process.argv.slice(2));
  const argumentosParseados = parseaParams(parametrosDeEntrada);
  console.log(argumentosParseados);
  const controlador = new ContactsController();
  const resultado = controlador.processOptions(argumentosParseados);
  console.log(resultado);
}

main();
