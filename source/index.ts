import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv: any): ContactsControllerOptions {
  const resultado = minimist(argv);
  console.log(resultado);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();
