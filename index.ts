import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const result = minimist(argv);
  return {
    action: result.action,
    params: JSON.parse(result.params),
  };
  //var argv = require("minimist")(process.argv.slice(2));
}

function main() {
  const controller = new ContactsController();
  const argumentoIngresado = parseaParams(process.argv.slice(2));
  const resultadoParseado = controller.processOptions(argumentoIngresado);
  console.log(resultadoParseado);
}

main();
