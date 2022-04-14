import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var argumentosParseados = require('minimist')(argv.slice(2));

  return {
    action: argumentosParseados['action'],
    params: argumentosParseados['params']
  };
}

function main() {
  const controlador = new ContactsController();

  console.log(controlador.processOptions(parseaParams(process.argv)));
}

main();
