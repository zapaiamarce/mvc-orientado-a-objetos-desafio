import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);

  if (resultado.params) {
    return {
      action: resultado.action,
      params: JSON.parse(resultado.params),
    };
  } else {
    return {
      action: resultado.action,
    };
  }
}

function main() {
  const controller = new ContactsController();
  const parseParams = parseaParams(process.argv.slice(2));
  const printResult = controller.processOptions(parseParams);
  console.log(printResult);
}

main();
