import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

//import { ContactsCollection } from "./models";
//- parsear los argumentos en **index.ts** usando https://www.npmjs.com/package/minimist
//- instanciar el **ContactsController** e invocar a su método **processOptions**
//- imprimir la respuesta en la terminal

//- Enviar un PR con los cambios y chequear que los tests de github pasen correctamente



function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {}
//const contacto = new ContactsCollection ();
//contacto.load();
const controller = new ContactsController();
const params=parseaParams(process.argv.slice(2));
const result = controller.processOptions(params);
console.log(result);
main();
