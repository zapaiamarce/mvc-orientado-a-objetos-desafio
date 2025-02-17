import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
   const parsearArgv = minimist(argv);
   console.log(parsearArgv);

   return {
    action: parsearArgv.action || null, // Asignar la acción si existe
    params: parsearArgv.params || null, // Asignar los parámetros si existen
  };
}

function main() {
  const options = parseaParams(process.argv.slice(2)); // Pasar los argumentos a parseaParams
  const controller = new ContactsController(); // Instanciar el controller
  const result = controller.processOptions(options); // Invocar el método processOptions
  console.log(result); // Mostrar el resultado
}

main();

