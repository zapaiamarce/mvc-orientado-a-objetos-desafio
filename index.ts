import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const params = minimist(argv);

  return {
    action: params.action,
    params: JSON.parse(params.params),
  };
}

function main() {
  const controller = new ContactsController();
  const argv = parseaParams(process.argv.slice(2));

  console.log(controller.processOptions(argv));
}

main();
