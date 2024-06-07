import { argv } from "process";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(process.argv.slice(2));
  //console.log(resultado); //PRUEBA

  return {
    action: resultado.action, // action?: "get" | "save" | null;
    params: JSON.parse(resultado.params), // pasear el parametro a un objeto
  };
}

function main() {
  // const collectionBarbi = new ContactsCollection(); // PRUEBA
  // collectionBarbi.load(); // PRUEBA
  // console.log ("Soy el main"); // PRUEBA

  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  // console.log(params); // prueba imprime x la terminal como OBJETO
  const resultado = controller.processOptions(params);
  console.log(resultado);
}

main();

