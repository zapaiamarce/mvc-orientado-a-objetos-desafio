import { argv } from "process";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv) {

  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parametros = require('minimist')(process.argv.slice(2)) // aca le digo que corte el argumento apartid de la segunda palabra

  return {
    action: parametros._[0], //Aca le digo que me de el valor cero de la
    params: parametros._[1],
  }
}

function main() {
  
  
  const prueba = new ContactsControllerOptions // creo el objeto prueba
  prueba.action = parseaParams(argv).action // inyecto el valor actions al objeto
  prueba.params = parseaParams(argv).params // inyecto el valor params al objeto
  
  // console.log('hola soy prueba',prueba.action)
  // console.log('hola soy params',prueba.params)
  // console.log('hola soy prueba',prueba)



  const pruebaContactControler = new ContactsController
  pruebaContactControler.processOptions(prueba)
  return pruebaContactControler
}

main();
