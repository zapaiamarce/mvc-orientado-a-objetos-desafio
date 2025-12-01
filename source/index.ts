import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const resultado = minimist(argv);

  return {
    action: resultado["action"] || null,
    params: JSON.parse(resultado["params"]) || null,
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  //console.log("Params:", params);
  const resultado = controller.processOptions(params);
  console.log("Resultado:", resultado);
}

main();
