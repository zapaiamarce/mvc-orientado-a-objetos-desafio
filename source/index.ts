import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const resultado = minimist(argv);

  let params;

  try {
    params = JSON.parse(resultado.params);
  } catch (error) {
    console.error("Error al parsear params:", error);
    params = null;
  }

  return {
    action: resultado.action,
    params: params,
  };
}

function main() {
  const controller = new ContactsController();
  const argss = parseaParams(process.argv.slice(2));
  controller.processOptions(argss);
}

main();
