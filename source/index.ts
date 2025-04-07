import { ContactsController, ContactsControllerOptions } from './controllers';
import minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parsedArguments = minimist(argv);

  return {
    action: parsedArguments.action || null,
    params: parsedArguments.params ? JSON.parse(parsedArguments.params) : {},
  };
}

function main() {
  const options = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  controller.processOptions(options);
}

main();
