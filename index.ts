import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const parseando = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: parseando.action,
    params: JSON.parse(parseando.params),
  };
}

function main() {
  const contact = new ContactsController();
  const sendParamsToParse = parseaParams(process.argv.slice(2));
  const resultado = contact.processOptions(sendParamsToParse);
  console.log(resultado);
}

main();
