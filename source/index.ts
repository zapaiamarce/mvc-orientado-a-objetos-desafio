import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var argv = require("minimist")(process.argv.slice(2));
  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const contactoController = new ContactsController();
  const argvTerminal = process.argv.slice(2);
  const paramsTerminal = parseaParams(argvTerminal);
  const resultado = contactoController.processOptions(paramsTerminal);
  console.log(resultado);
}

main();
