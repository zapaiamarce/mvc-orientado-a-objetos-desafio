import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { argv } from "process";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const argumento = minimist(argv);
  return {
    action: argumento.action,
    params: JSON.parse(argumento.params),
  };
}

function main() {}
const parseado = parseaParams(process.argv.slice(2))
const contacCon = new ContactsController();
const resultado = contacCon.processOptions(parseado)
console.log(resultado)
main();
