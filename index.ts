import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"
function parseaParams(argv): ContactsControllerOptions {
  var argvParseado = minimist(argv)
  return {
    action: argvParseado.action,
    params: JSON.parse(argvParseado.params),
  };
}

function main() {
  const controller = new ContactsController
  const aber = parseaParams(process.argv.slice(2))
  const resultado = controller.processOptions(aber)
  console.log(resultado)  
  
}

main();
