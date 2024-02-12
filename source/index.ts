import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from 'minimist';

function parseaParams(argv: any): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const params = {
    action: argv._[0] ? argv._[0] : null,
    params: argv._[1] ? argv._[1] : null 
  }
  return params;
}

function main() {
  const argv = minimist(process.argv.slice(2));
  const contactsController = new ContactsController;
  const options = parseaParams(argv);

  const result = contactsController.processOptions(options);

  if(result){
    console.table(result);
  };
};

main();
