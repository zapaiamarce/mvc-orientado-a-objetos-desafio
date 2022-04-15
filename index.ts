import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const result = minimist(argv);
  return {
    action: result.action,
    params: JSON.parse(result.params),
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
