import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const params = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();
