import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions{
  // parsear el argv usando https{}://www.npmjs.com/package/minimis  

  console.log(argv);
  var paramsParseados = JSON.parse(argv["params"]);
  

  return {
    action: argv["action"],
    params: paramsParseados,
  };
}

function main() {

 const argv = minimist(process.argv.slice(2)); 
 const controlador = new ContactsController;
 console.log(controlador.processOptions(parseaParams(argv)));

}

main();
