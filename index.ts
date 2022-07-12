import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"
//import { ContactsCollection } from "./models";
//import minimist = require('minimist')


function parseaParams(argv): ContactsControllerOptions {
  const argu=minimist(argv);
  //console.log(argu);
  return {
    action: argu.action,
    params: JSON.parse(argu.params) //(argu.params? JSON.parse(argu.params) : null ) 
  };
}

function main() {
  const controller = new ContactsController();
 let res = controller.processOptions( parseaParams(process.argv.slice(2)) );
 console.log(res);
 
}

main();
