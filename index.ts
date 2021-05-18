import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv);
  delete args._; // ELIMINO PROPIEDAD "_", LA UNICA PROP. QUE TIENE ES EL OBJETO CON ARGUMENTOS.
  let actions: "get" | "save";
  let parametros: object | number;
  if (args["get"] === true) {
    actions = "get";
    parametros = args["get"];
  } else if (args["get"]) {
    actions = "get";
    parametros = args["get"];
  } else if (args["save"]) {
    actions = "save";
    const jsonParse = JSON.parse(args["save"]);
    parametros = jsonParse;
  }
  return {
    action: actions,
    params: parametros,
  };
}

function main() {
  const parse = parseaParams(process.argv);
  const newContactsController = new ContactsController();
  const processOption = newContactsController.processOptions(parse);
  console.log(processOption);
}

main();
