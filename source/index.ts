import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var minimist = require("minimist");
  const args = minimist(argv);
  if (args.get) {
    return {
      action: "get",
      params: { id: args.get },
    };
  }
  return {
    action: null,
    params: null,
  };
}

function main() {
  const options = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  controller.processOptions(options);
}

main();
