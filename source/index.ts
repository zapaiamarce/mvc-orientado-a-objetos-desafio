import { ContactsController, ContactsControllerOptions } from "./controllers";
import { Contact } from "./models";
import * as minimist from "minimist"

const resultado = minimist(process.argv.slice(2))

function parseaParams(dato): ContactsControllerOptions {
  
  return {
    action: dato[1][0],
    params: JSON.parse(dato[2][0])
  };
}

function main() {
  const ejemplo = parseaParams(Object.entries(resultado))
  const opciones = new ContactsController()
  opciones.processOptions(ejemplo)
}

main();
