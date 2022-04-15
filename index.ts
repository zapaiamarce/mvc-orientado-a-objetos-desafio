import { ContactsController, ContactsControllerOptions } from "./controllers";


function parseaParams(argv): ContactsControllerOptions {
  var argv = require('minimist')(process.argv.slice(2));
  return {
    action: argv.action,
    params: argv.params,
  };
}

function main() {
  const argsParseados = parseaParams(process.argv); 
  const controller = new ContactsController;
  console.log(controller.processOptions(argsParseados));
}

main();
