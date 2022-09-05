import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var argv = require("minimist")(process.argv.slice(2));
  console.log(typeof JSON.parse(argv.params));
  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const controllerEjemplar = new ContactsController();
  const argvTerminal = require("minimist")(process.argv.slice(2));
  const parametrosTerminal = parseaParams(argvTerminal);
  const resultado = controllerEjemplar.processOptions(parametrosTerminal);
  console.log(resultado);
}
main();
