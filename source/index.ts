import * as minimist from 'minimist';
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv: string[]): ContactsControllerOptions {
  const args = minimist(argv);
 
  return {
    action: args.action,
    params: JSON.parse(args.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();