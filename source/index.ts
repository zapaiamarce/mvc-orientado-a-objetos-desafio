import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection, Contact } from "./models";
import * as minimist from 'minimist';

function parseaParams(argv: any): ContactsControllerOptions {
     let resultado: any = minimist(argv);
     return {
         action: resultado.action,
         params: resultado.params }
}
  
function main() {
     let output: Object = process.argv.slice(2);
     let outputProcesado: ContactsControllerOptions = parseaParams(output);
     let cel: ContactsController = new ContactsController();
     let dato: any = cel.processOptions(outputProcesado);
}

 



