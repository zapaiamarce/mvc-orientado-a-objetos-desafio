import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
  const coll = new ContactsCollection()
  coll.getOneById(1)
}

main();
