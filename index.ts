import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const respuestaParseada = parseaParams(process.argv.slice(2));
  const resu = controller.processOptions(respuestaParseada);
  console.log(resu);
}

main();
