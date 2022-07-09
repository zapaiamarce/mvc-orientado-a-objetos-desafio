import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  // console.log(resultado);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controllers = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controllers.processOptions(params);
  console.log(resultado);
}

main();
