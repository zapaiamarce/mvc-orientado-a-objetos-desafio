import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as _ from "minimist";
import * as __ from "lodash";

function parseaParams(argv): ContactsControllerOptions {
  let parseArgs = _(argv);
  let actions = __.drop(Object.keys(parseArgs));
  let params = __.drop(Object.values(parseArgs));

  if (actions[0].includes("get")) {
    return {
      action: actions[0],
      params: params[0],
    };
  }

  if (actions[0].includes("save")) {
    let parametros = params[0];
    return {
      action: actions[0],
      params: parametros,
    };
  }
}

function main() {
  let argumento = parseaParams(process.argv.slice(2));
  let controlador = new ContactsController();
  console.log(controlador.processOptions(argumento));
}

main();
