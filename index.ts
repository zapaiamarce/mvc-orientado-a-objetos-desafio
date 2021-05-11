import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { parse } from "node:path";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parseoMinimist = minimist(argv);
  return {
    action: parseoMinimist.action,
    params: JSON.parse(parseoMinimist.params),
  };
}

function main() {
  const contactController = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = contactController.processOptions(params);
  console.log(result);
}

main();
