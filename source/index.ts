import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";
import c from "chalk";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const result = minimist(argv);

  let params;
  try {
    params = JSON.parse(result["params"]);
  } catch (error) {
    console.error("Error parsing params:", error);
    params = {};

    
  }

  return {
    action: result["action"],
    params: params,
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = controller.processOptions(params);
  console.log(result);
  
  return result;
}

main();
