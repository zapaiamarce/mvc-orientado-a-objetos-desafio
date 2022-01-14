import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const argvThing = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: argvThing.action,
    params: JSON.parse(argvThing.params),
  };
}

function main() {
  const controller = new ContactsController();
  const parseaParamas = parseaParams(process.argv.slice(2));
  const respuesta = controller.processOptions(parseaParamas);
  console.log(respuesta);
}

main();
