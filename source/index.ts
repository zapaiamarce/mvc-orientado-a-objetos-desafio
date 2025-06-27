import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parsed = minimist(argv);

  const action = parsed.action || null;

  const { action: _, ...params } = parsed;
  return {
    action,
    params,
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const respuesta = controller.processOptions(parseaParams(params));
  console.log(respuesta);
}

main();
