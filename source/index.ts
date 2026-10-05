import minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const args = minimist(argv.slice(2));

  return {
    action: args.action,
    params: args.params ? JSON.parse(args.params) : null,
  };
}

function main() {
  const options = parseaParams(process.argv);
  const controller = new ContactsController();
  const resultado = controller.processOptions(options);
  console.log(resultado);
}

main();
