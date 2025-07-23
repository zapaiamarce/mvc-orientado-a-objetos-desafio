import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const args = minimist(argv);
  let params = args.params;
  
  // Si params es una string, intentar parsearlo como JSON
  if (typeof params === 'string') {
    try {
      // Intentar parsear como JSON válido primero
      params = JSON.parse(params);
    } catch (e) {
      try {
        // Si falla, intentar convertir formato {key:value} a JSON válido
        const fixedJson = params.replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)/g, '$1"$2"$3')
                                .replace(/(:\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*[,}])/g, '$1"$2"$3');
        params = JSON.parse(fixedJson);
      } catch (e2) {
        console.error('Error parsing params JSON:', e);
        params = {};
      }
    }
  }
  
  return {
    action: args.action,
    params: params || {},
  };
}

function main() {
  const controller = new ContactsController();
  //console.log(controller.contacts.getAll());
  const options = parseaParams(process.argv);
  const result = controller.processOptions(options);
  console.log(result);
}

main();
