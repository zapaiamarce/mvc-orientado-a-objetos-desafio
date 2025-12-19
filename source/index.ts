import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv);
  const action = args.action;

  if (action !== "get" && action !== "save") {
    return { action: null, params: {} };
  }

  const { action: _, _: __, ...params } = args;

  if (params.id) params.id = Number(params.id);

  return {
    action,
    params,
  };
}

function main() {
  const args = process.argv.slice(2);
  const parsear = parseaParams(args);
  const instancia = new ContactsController();
  const resultado = instancia.processOptions(parsear);
  console.log(resultado);
}

main();
