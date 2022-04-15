import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import * as _ from "lodash";

function parseaParams(argv): ContactsControllerOptions {
  let arg = minimist(argv);
  return {
    action: arg.action,
    params: JSON.parse(arg.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const start = controller.processOptions(params);
  console.log(start);
}

main();
