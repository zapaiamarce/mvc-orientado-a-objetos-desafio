import { ContactsController, ContactsControllerOptions } from "./controllers";
// import * as libreriaMinimist from "minimist";


function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  
  var argv = require('minimist')(process.argv.slice(2));

  return {
    action: argv.action,
    params: {id: argv.id, name: argv.name},
  };
}

function main() {
  const argv = process.argv;
  const controlador = new ContactsController();
  const options = parseaParams(argv);
  const result = controlador.processOptions(options);
  console.log(result);
  
}

main();
