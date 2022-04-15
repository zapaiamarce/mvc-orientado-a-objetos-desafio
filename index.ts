import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const parametrosParseados = minimist(argv);

  return {
    action: parametrosParseados.action,
    params: JSON.parse(parametrosParseados.params),
  };
}

function main() {
  const datos = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = datos.processOptions(params);
}

main();
