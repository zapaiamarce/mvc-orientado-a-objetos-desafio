import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  var argv = require("minimist")(process.argv.slice(2));

  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  const result = controller.processOptions(params);
  console.log(result);
}

main();
//
