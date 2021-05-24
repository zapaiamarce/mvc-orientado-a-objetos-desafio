import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parseando = minimist(argv.slice(2));

  return {
    action: parseando.action,
    params: JSON.parse(parseando.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  const resultad = controller.processOptions(params);
  console.log(resultad);
}
main();
