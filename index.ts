 import { ContactsController, ContactsControllerOptions } from "./controllers";
 import { ContactsCollection  } from "./models";
import * as minimist from "minimist";
 
function parseaParams(argv): ContactsControllerOptions {

var resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controler = new ContactsController()
const params = parseaParams(process.argv.slice(2))

const result = controler.processOptions(params)
console.log(result)
}

main();
