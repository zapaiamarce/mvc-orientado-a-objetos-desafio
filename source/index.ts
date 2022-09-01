import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const parmDeLaTerm = minimist(argv);
  return {
    action: parmDeLaTerm.action,
    params: JSON.parse(parmDeLaTerm.params),
  };
}

function main() {
  const controller = new ContactsController();
  const parametros = parseaParams(process.argv.slice(2));
  const procesandoArg = controller.processOptions(parametros);
  console.log(procesandoArg);
}

main();
