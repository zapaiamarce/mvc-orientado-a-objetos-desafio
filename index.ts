import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
 let resultado = minimist (argv.slice(2)); 
return {
  action:resultado.action,
  params: JSON.parse (resultado.params)
};
  
}

function main() {
  let comandos = parseaParams (process.argv)
  let controllerOptions = new ContactsController()
  const resultado = controllerOptions.processOptions(comandos)
  console.log(resultado)
}

main();
