import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
/* import * as minimist from "minimist"; */

function parseaParams(argv): ContactsControllerOptions {
  /*  const resultado = minimist(argv);
  console.log(resultado); */
  var argv = require("minimist")(process.argv.slice(2));

  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  //console.log("soy params", params);
  const result = controller.processOptions(params);
  console.log(result);
  /* const coll = new ContactsCollection();
  coll.load(); */
}

main();
