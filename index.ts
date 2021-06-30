import { ContactsController, ContactsControllerOptions } from "./controllers";

import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  
  const parseArgv = minimist(argv);
  console.log(parseArgv);

  return {
    action: parseArgv.action,
    params: JSON.parse(parseArgv.params),
  };
}

function main() {
  const instanciaController = new ContactsController();

  const parse = parseaParams(process.argv.slice(2));

  const resultado = instanciaController.processOptions(parse);

  console.log(resultado);
}

main();
