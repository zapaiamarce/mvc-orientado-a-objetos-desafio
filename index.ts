import { ContactsController, ContactsControllerOptions } from './controllers';
import * as minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const argvParsed = minimist(argv);
  return {
    action: argvParsed.action,
    params: JSON.parse(argvParsed.params),
  };
}

function main() {
  const argv = process.argv;
  const parameters = parseaParams(argv);

  //const controller = new ContactsController();
  //console.log(controller.processOptions(parameters));
  console.log(parameters);
}

main();
