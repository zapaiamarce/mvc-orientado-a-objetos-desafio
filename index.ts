import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parseado = minimist(argv)
  return {
    action: parseado.action,
    params: JSON.parse(parseado.params),
  };
}

function main() {
  const parsearTerminal = parseaParams(process.argv.slice(2))

  const ContactController = new ContactsController()
  const respuesta = ContactController.processOptions(parsearTerminal)
  console.log(respuesta)
}

main();
