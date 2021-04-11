import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var argv = require("minimist")(process.argv.slice(2));
  console.log(argv);
  if (argv.action == "save") {
    return {
      action: argv.action,
      params: { id: argv.id, name: argv.name },
    };
  } else {
    return {
      action: argv.action,
      params: argv.params,
    };
  }
}

function main() {
  const contactsController = new ContactsController();
  const res = contactsController.processOptions(parseaParams(process.argv));
  console.log(res);
}

main();
