import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const aux = minimist(argv);
  if (aux.params) {  
    return {  
      action: aux.action,
      params: JSON.parse(aux.params)
    }
  }
}

function main() {
  const contactosControlador = new ContactsController();
  const parsear = parseaParams(process.argv.slice(2));
  const output = contactosControlador.processOptions(parsear);
  console.log(output);
}
main();
