import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv)/*: ContactsControllerOptions*/ {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var dato = require('minimist')(argv.slice(2));
  if(dato.params == true){
    dato.params = {id: dato.id, name:dato.name};
  }

  return {
    action: dato.action,
    params: dato.params,
  };
}

function main() {
const datoParseado = parseaParams(process.argv);
const controller = new ContactsController();
const options = new ContactsControllerOptions();
options.action = datoParseado.action;
options.params = datoParseado.params;
controller.processOptions(options);


console.log(controller.processOptions(options));
}

main();
