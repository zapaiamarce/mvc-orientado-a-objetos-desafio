import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { parse } from "node:path";
import { argv } from "node:process";
import { stringify } from "node:querystring";
import { Contact } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  const resuParams = resultado.params;
  const jsonParseDeParams = JSON.parse(resuParams);
  const elObjeto = {
    action: resultado.action,
    params: jsonParseDeParams,
  };
  return elObjeto;
}

function main() {
  const controller = new ContactsController();
  const ParaPasarAlController = parseaParams(process.argv.slice(2));
  const ejecutor = controller.processOptions(ParaPasarAlController);
  console.log(ejecutor);
}

main();
