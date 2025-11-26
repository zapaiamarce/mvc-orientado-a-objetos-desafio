import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv: any): ContactsControllerOptions {
  let params = argv.params;

  if (typeof params === "string" || typeof params === "number") {
    params = { id: params };
  }

  return {
    action: argv.action || null,
    params: params || null,
  };
}

function main() {
  const argv = minimist(process.argv.slice(2));
  console.log(argv);

  const options = parseaParams(argv);
  const controller = new ContactsController();
  const result = controller.processOptions(options);
  console.log(result);
}

main();
