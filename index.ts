import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argvParseados = minimist(argv);
  return {
    action: argvParseados.acction,
    params: JSON.parse(argvParseados.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();
