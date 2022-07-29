import { ContactsController, ContactsControllerOptions } from "./controllers";
var minimist = require('minimist');


function parseaParams(argv): ContactsControllerOptions {

  type Params = {
  id?: number,
  name?: string
  }
    let action;
    let params: Params = {};

    if (argv.get === true) {
      action = "get";
      params = null;
    }

    if (typeof argv.get === "number") {
      action = "get";
      params.id = argv.get;
    }

    if ((argv.saveID) && (argv.saveName)) {
      action = "save"
      params.id = argv.saveID;
      params.name = argv.saveName;
    }

  return {
    action: action,
    params: params,
  };
}

function main() {
  const params = minimist(process.argv.slice(2));
  const options = parseaParams(params);
  const contactsController = new ContactsController;

 // si la opción es get, muestro el/los contactos en tabla
  if (options.action === "get") {
    console.table(contactsController.processOptions(options));
  // la acción es save, no hace falta mostrar nada
   } else { contactsController.processOptions(options) };
}

main();
