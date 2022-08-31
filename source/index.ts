import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from 'minimist';


function parseaParams(argv): ContactsControllerOptions {
  // Esta función retorna un objeto con los argumentos parseados
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    // Acá recibimos un string. Por eso usamos jsonparse
    params: JSON.parse(resultado.params)
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();
