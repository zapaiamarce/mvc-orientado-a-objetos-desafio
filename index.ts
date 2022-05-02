import {ContactsController, ContactsControllerOptions} from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv):ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const rta = minimist(argv) 
  return {
    action : rta.action,
    params : JSON.parse(rta.params)
  };
}

function main() {
  
  const controller = new ContactsController()

  const ejecutor = parseaParams(process.argv.slice(2))

  const resultado = controller.processOptions(ejecutor)
  console.log(resultado);
}

main();