import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv);

  return {
    action: args.action || null,
    params: args.params || null,
  };
}

function main() {
  const options = parseaParams(process.argv.slice(2));
  const contactsController = new ContactsController();
  return contactsController.processOptions(options);
}

console.log(main());
