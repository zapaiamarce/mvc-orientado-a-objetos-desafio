import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}
function main() {
  const controller = new ContactsController();
  const parametros = parseaParams(process.argv.slice(2));
  if (parametros.action == "get") {
    console.log(controller.processOptions(parametros));
  } else {
    controller.processOptions(parametros);
    console.log("Se guardó satisfactoriamente su contacto");
  }
}
main();
