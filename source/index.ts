import * as minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  const resultados = minimist(argv);

  return {
    action: resultados.action,
    params: resultados,
  };
}

function main() {
  const controller = new ContactsController();

  const options = parseaParams(process.argv.slice(2));

  const repuesta = controller.processOptions(options);

  console.log(repuesta);
}

main();
