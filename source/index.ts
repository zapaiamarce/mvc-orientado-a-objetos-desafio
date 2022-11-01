import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

// import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);

  //La propiedad "action" procede de una signatura de índice,
  //por lo que debe accederse a ella con ["action"].["params"]
  return {
    action: resultado["action"], //resultado.action,
    params: JSON.parse(resultado["params"]), //(resultado.params)
  };
}

function main() {
  const controller = new ContactsController();
  const parsear = parseaParams(process.argv.slice(2));

  const resultado = controller.processOptions(parsear);
  console.log(resultado);
}

main();
