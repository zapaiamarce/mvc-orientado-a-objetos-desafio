import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";  

function parseaParams(argv): ContactsControllerOptions {
  const resultado=minimist(argv);
  return{
    action:resultado.action,
    params:JSON.parse(resultado.params),
  }
}

function main() {
  const controller=new ContactsController();
  const params=parseaParams(process.argv.slice(2));
  
  const x=controller.processOptions(params)
  console.log(x)
}
  
main();
