import { ContactsController, ContactsControllerOptions } from "./controllers";
const minimist = require("minimist");

function parseaParams(argv): ContactsControllerOptions {
  const params = minimist(argv);
  return {
    action: params._[0],
    params: params._[1],
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  controller.processOptions(params);
}

main();
