import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // Parsear el argv usando minimist
  const resultado = minimist(argv.slice(2));
  console.log(resultado); // Esto te ayudará a ver qué argumentos se están pasando

  return {
    action: resultado.action || null, // Lee el args.action da null
    params: resultado.params ? JSON.parse(resultado.params) : {}, // si params viene como string JSON lo parseamos
  };
}

function main() {
  
  const params = parseaParams(process.argv); // Pasar solo los argumentos relevantes
  const controller = new ContactsController();
  const result = controller.processOptions(params); // Llamar a processOptions con los parámetros
  console.log(result); // Imprimir el resultado
}

main();