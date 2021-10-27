import { ContactsController, ContactsControllerOptions } from './controllers';

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argvParsed = require('minimist')(argv.slice[2]);
  return {
    action: argvParsed.action,
    params: { id: argvParsed.id, name: argvParsed.name },
  };
}

function main() {
  const argv = process.argv;
  const parameters = parseaParams(argv);

  const controller = new ContactsController();
  console.log(controller.processOptions(parameters));
  console.log(parameters);
}

main();
