import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const argv = minimist(process.argv.slice(2));
  const controller = new ContactsController();
  const options = parseaParams(argv);
  console.log(controller.processOptions(options));
}

main();
