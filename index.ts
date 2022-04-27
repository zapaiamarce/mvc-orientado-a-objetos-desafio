import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
    // params: resultado.params,
  };
}

function main() {
  const controller = new ContactsController();
  const resultado = controller.processOptions(
    parseaParams(process.argv.slice(2))
  );
  console.log(resultado);
}

main();
