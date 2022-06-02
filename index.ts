import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: argv.action,
    params: argv.params,
  };
}

function main() {
  var argv = require("minimist")(process.argv.slice(2));
  parseaParams(argv);
  const controlador = new ContactsController();
  const respuesta = controlador.processOptions(parseaParams(argv));
  console.log(respuesta);
}

main();
