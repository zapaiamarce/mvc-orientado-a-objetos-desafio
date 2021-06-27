import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv.slice(2));
  return {
    action: args.action,
    params: JSON.parse(args.params),
  };
}

function main() {
  const options = parseaParams(process.argv);
  const contactsController = new ContactsController();
  const response = contactsController.processOptions(options);
  console.log(response);
}

main();
