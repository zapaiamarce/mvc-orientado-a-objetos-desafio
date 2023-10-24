
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const arr = minimist(argv);

  return {
    action: arr.action,
    params: JSON.parse(arr.params),
  };
}

function main() {
  const coll = new ContactsCollection();
  const controller = new ContactsController();
  coll.load();
  
  let infoParseada = parseaParams(process.argv.slice(2));
  console.log(controller.processOptions(infoParseada));
}

main();