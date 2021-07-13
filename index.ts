import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  // console.log(resultado); el primero que hago
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const param = parseaParams(process.argv.slice(2));
  // console.log(params);
  const res = controller.processOptions(param);
  console.log(res);
}

main();
