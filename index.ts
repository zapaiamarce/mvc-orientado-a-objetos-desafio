import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const output = minimist(argv);
  const property = JSON.parse(output.params);
  return {
    action: output.action,
    params: property,
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const output = controller.processOptions(params);

  return output;
}

main();
