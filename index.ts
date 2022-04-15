import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  var fromOutside = minimist(argv);
  return {
    action: fromOutside.action,
    params: JSON.parse(fromOutside.params),
  };
}

function main() {
  var contactController = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  var result = contactController.processOptions(params);
  console.log(result);
}

main();
