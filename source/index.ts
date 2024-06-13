import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as minimist from "minimist";



function parseaParams(argv): ContactsControllerOptions {
  const parsedArgs = minimist(argv);

  return {
    action: parsedArgs.action,
    params: JSON.parse(parsedArgs.params),
  };
}

function main() {
  const contactsCollection = new ContactsCollection();
  contactsCollection.load();
  const controller = new ContactsController(contactsCollection);
  
  const options = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(options);

  console.log(resultado);
}

main();
