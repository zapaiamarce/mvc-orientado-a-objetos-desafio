import { argv } from "process";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";
const obejtoDeOpciones : ContactsControllerOptions = {
  action: "get" ,
  params: { }
};
function parseaParams(argv): ContactsControllerOptions {
  const ingresoConsola = minimist(argv)
  // parsear el argv usando https://www.npmjs.com/package/minimist
  
  return {
    action: obejtoDeOpciones.action ||null,
    params: obejtoDeOpciones.params || {},
  };
}

function main() {
  const opciones = parseaParams(process.argv.slice(2));
  console.log (opciones)
}
main();
