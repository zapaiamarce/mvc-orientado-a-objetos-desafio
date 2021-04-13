import { ContactsController, ContactsControllerOptions } from './controllers';
import * as minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  var argvResult = minimist(argv);

  return {
    action: argvResult.action,
    params: JSON.parse(argvResult.params),
  };
}

function main() {
  const controller = new ContactsController();
  const resultParams = parseaParams(process.argv.slice(2));
  console.log(controller.processOptions(resultParams));
}

main();
