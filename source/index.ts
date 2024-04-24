import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const params = minimist(argv);
  const newParams: { action: any; params: any } = params as any;
  return {
    action: newParams.action,
    params: JSON.parse(newParams.params) || "",
  };
}

function main() {
  const argv = process.argv.slice(2);
  const parameters = parseaParams(argv);
  const controller = new ContactsController();
  const result = controller.processOptions(parameters);
  // console.log(result);
}

main();
