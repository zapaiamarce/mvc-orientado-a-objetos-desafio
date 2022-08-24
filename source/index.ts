import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
export { ContactsCollection } from "./models";
import * as minimist from "minimist"
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  let arg = minimist(argv);
  console.log(arg)
  return{
    action: arg.action,
    params: JSON.parse(arg.params),
  };
}

function main() {
 let datos = parseaParams(process.argv.slice(2))
 let data = new ContactsCollection()
 let control = new ContactsController(data)
 console.log(control.processOptions(datos))
 
}

main();
