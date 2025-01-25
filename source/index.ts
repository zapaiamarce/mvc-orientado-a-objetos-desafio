import { argv } from "process";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection, Contact } from "./models";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {

  const resultado = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  console.log(controller.processOptions(params));

}

main();
