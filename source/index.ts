import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argvParseMinimist = minimist(argv);
  return {
    action: argvParseMinimist.action,
    params: JSON.parse(argvParseMinimist.params),
  };
}

function main() {
  const newController = new ContactsController();
  const parse = parseaParams(process.argv.slice(2));
  const resultado = newController.processOptions(parse);
  console.log(resultado);
}

main();
