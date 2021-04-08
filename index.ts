import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const imput = minimist(argv);
  return {
    action: imput.action,
    params: JSON.parse(imput.params),
  };
}

function main() {
  const controller = new ContactsController();
  const imput = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(imput);
  console.log(resultado);
}

main();
