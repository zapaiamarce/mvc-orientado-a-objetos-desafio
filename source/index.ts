import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  var parseArgs = require('minimist')
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
  const argv = process.argv.slice(2);
  const options = parseaParams(argv);
  const controller = new ContactsController();
  controller.processOptions(options);
  console.log( controller );
  
}

main();
