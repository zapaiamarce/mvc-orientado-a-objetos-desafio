import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  let parsedFile = minimist(argv);
  return {
    action: parsedFile.action,
    params: JSON.parse(parsedFile.params),
  };
}

function main() {
  const newContactController = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = newContactController.processOptions(params);
  console.log(result);
}

main();
