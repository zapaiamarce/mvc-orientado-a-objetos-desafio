import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"


function parseaParams(argv): ContactsControllerOptions {
  const result = minimist(argv)

  if (result.action == "get" && result.id) {
    return { action: result.action, params: { id: result.id } }
  }
  else if (result.action == "get") {
    return { action: result.action, params: "" }
  } 
  else if (result.action == "save") {
    return {
      action: result.action,
      params: { id: result.id, name: result.name }
    };
  }

}

function main() {
  const options = parseaParams(process.argv.slice(2))
  const collection = new ContactsController
  const result = collection.processOptions(options)
  console.log(result)
}

main();
