import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const objeto = minimist(argv);

  return {
    action: objeto.action,
    params: objeto.params,
  };
}

function main() {
  const entryParameters = parseaParams(process.argv.slice(2));
  const contactControlerEntry = new ContactsController();
  console.table(contactControlerEntry.processOptions(entryParameters));
}

main();
