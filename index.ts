import { ContactsController, ContactsControllerOptions } from "./controllers";


function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
   
  return{
    action: argv.action,
    params: JSON.parse(argv.params)
  }
  
}

function main() {
    const argv = require('minimist')(process.argv.slice(2));
    const controller = new ContactsController()

   console.log(controller.processOptions(parseaParams(argv)))
}

main();
