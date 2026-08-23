import { ContactsController, ContactsControllerOptions, } from "./controllers";
import { Contact } from "./models";


const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
 
function parseaParams(argv:any): ContactsControllerOptions {
  return {
    action: typeof argv.action === "string" ? argv.action : null,
    params: {
      id: typeof argv.params.id === "number" ? argv.params.id : undefined,
      name: typeof argv.params.name === "string" ? argv.params.name : null,
    },
  };
}

function main() {}
const user = parseaParams(argv)
console.log(user)
const vista = new ContactsController()
console.log(vista.processOptions(user)
)


main();



