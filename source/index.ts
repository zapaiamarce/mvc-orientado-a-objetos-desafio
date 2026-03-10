import * as minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv.slice(2));

  const { action, ...params } = args;

  return {
    action,
    params,
  };
}

function main() {
  const options = parseaParams(process.argv);

  const controller = new ContactsController();

  const result = controller.processOptions(options);

  console.log(result);
}

main();
