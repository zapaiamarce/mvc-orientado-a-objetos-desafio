import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection }  from "./models";
import * as minimist from "minimist";
import { argv } from "node:process";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
const controller = new ContactsController();
const params = parseaParams(process.argv.slice(2));
const resFinal = controller.processOptions(params);
console.log(resFinal);
}

main();
