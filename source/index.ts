import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv.slice(2));
  return {
    action: args.action || null, // Lee el args.action da null
    params: args.params ? JSON.parse(args.params) : {}, // si params viene como string JSON lo parseamos
  };
}

function main() {
  const options = parseaParams(process.argv); // Utilizamos la funcion parseaParams y le pasamos el process.argv como parametros
  const controller = new ContactsController(); // Instanciamos el controller
  const result = controller.processOptions(options); // Y como resultado, utilizamos el metodo processOptions con los parametros parseados de options
  console.log(result); // Imprimimos los resultados
}

main();