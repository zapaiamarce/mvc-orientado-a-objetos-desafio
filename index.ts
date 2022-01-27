import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv: string[]): ContactsControllerOptions {
  const objetoMinimist = minimist(argv);

  return {
    action: objetoMinimist.action,
    params: JSON.parse(objetoMinimist.params),
  };
}

function main() {
  const objetoArgumentos = parseaParams(process.argv.slice(2));

  const controllerContactos = new ContactsController();
  const respuesta = controllerContactos.processOptions(objetoArgumentos);

  if (respuesta) {
    console.log(respuesta);
  }
}

main();
