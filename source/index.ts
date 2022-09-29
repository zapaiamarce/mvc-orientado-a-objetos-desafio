import * as minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv);

  return {
    action: args.action,
    params: JSON.parse(args.params),
  };
}

function main() {
  const args = parseaParams(process.argv.slice(2));

  const collection = new ContactsCollection();
  const controller = new ContactsController(collection);
  const result = controller.processOptions(args);

  console.log(result);
}

main();
