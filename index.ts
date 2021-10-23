import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  var argvParseado = require('minimist')(argv.slice(2));
  
  return {
    action: argvParseado.action,
    params: {
      id: argvParseado.id,
      name: argvParseado.name
    }
  }
}

function main() {
  const argv = process.argv;
  const options = parseaParams(argv);
  const nuevoContactController = new ContactsController();
  const respuesta = nuevoContactController.processOptions(options);
  respuesta && console.log(respuesta);
  console.log(nuevoContactController.contacts);
}
main();
