import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as argsParser from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  const args = argsParser(argv.slice(2));
  const action = args._.find(a => a == "get" || a == "save");
  var params = args._.find(a => typeof a == "number");
  if (params) {} else {
    const joined = args._.join();
    const idIndex = joined.indexOf("id");
    const nameIndex = joined.indexOf("name");
    const id = joined.slice(idIndex, nameIndex);
    const name = joined.slice(nameIndex);
    const idValue = parseInt(id.slice(id.indexOf(":") + 1));
    const nameValue = name.slice(name.indexOf(":") + 1);
    
    params = {
      id: idValue,
      name: nameValue
    }
  }

  return {
    action: action,
    params: params,
  };
}

function main() {
  const cController = new ContactsController;
  console.log(cController.processOptions(parseaParams(process.argv)));
  console.log(cController.contacts.data);
}

main();
