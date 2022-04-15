import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import * as process from "process";
// Los agrgumentos que recibe desde la terminal tienen que tene los argumentos -a y -p.
// -a recibe los parametros save y get.
// Sí -a es save recibe solamente un objeto en formato:
//'{ "id":number, "name": "string" }'.
//Mientras que -a = get al no recibir -p devuelve todos los objetos
// y al recibir -p del tipo number. busca y devuelve el objeto con ese id.
function parseaParams(argv): ContactsControllerOptions {
  const argvParseado = minimist(argv);  
  const output= new ContactsControllerOptions();
  output.action=argvParseado.a;
  output.params=argvParseado.p;
  return output;
}

function main() {
  const argv= process.argv.slice(2);
  const controller = new ContactsController();
  console.log(controller.processOptions(parseaParams(argv)));
}

main();
