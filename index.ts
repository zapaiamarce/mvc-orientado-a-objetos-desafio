import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argvParse = minimist(argv);
  //console.log(JSON.parse(argvParse.params));
  return {
    action: argvParse.action,
    params: JSON.parse(argvParse.params),
  };
}

function main() {
  const controller = new ContactsController();
  const output = controller.processOptions(parseaParams(process.argv.slice(2)));
  console.log(output);
}

main();
