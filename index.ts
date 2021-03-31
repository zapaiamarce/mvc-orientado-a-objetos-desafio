import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(): ContactsControllerOptions {
   // parsear el argv usando https://www.npmjs.com/package/minimist
   return require("minimist")(process.argv.slice(2));
   //  return {
   //     action: null,
   //     params: null,
   //  };
}

function main() {
   var controlador = new ContactsController();
   return controlador.processOptions(parseaParams());
}

main();
