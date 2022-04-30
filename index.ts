import {Contact, ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argConsola):ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const rta = minimist(argConsola) 
  return rta
}

function main() {
  
  const controladorContacto = new ContactsController()

  const argvConsola = process.argv.slice(2)
  const argumentosParseados = parseaParams(argvConsola)
  controladorContacto.processOptions(argumentosParseados)
  
  
  console.log(controladorContacto.contacts.getAll());
  const contacto2 = { 
    id : 10 , 
    name : "leoh"
  }

  controladorContacto.contacts.addOne(contacto2)
  
  console.log(controladorContacto.contacts.getAll());
  
  
}

main();