import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"
function parseaParams(argv): ContactsControllerOptions {
const aux = minimist(argv)
  return {
    action: aux.action,
    params: JSON.parse(aux.params)
  };
}

function main() { 
  const controller = new ContactsController();
  const parsear = parseaParams(process.argv.slice(2));
  const output = controller.processOptions(parsear);
  console.log(output);
}
main();
