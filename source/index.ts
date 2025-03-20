import minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const args= minimist(argv);
  return {
    action: args['actions']|| null,
    params: args['params']|| null,
  };
}

/**
 * Funci n principal que se encarga de obtener los par metros desde el CLI,
 * instanciar el controlador, llamar al m todo processOptions y mostrar el resultado
 * por consola.
 */
function main() {
  const  params = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
  const response = controller.processOptions(params);
  console.log(response); 
}

main();
