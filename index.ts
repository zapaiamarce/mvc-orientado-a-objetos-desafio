import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  // ej: -a get -i 13 -n Mariano
  // -a --> action
  // -i --> id
  // -n --> name
  var parseado = require("minimist")(argv);
  //console.log(parseado);
  return {
    action: parseado.a,
    params: { id: Number(parseado.i), name: parseado.n },
  };
}

function main() {
  var parametros = parseaParams(process.argv.slice(2));
  const controlador = new ContactsController();
  const resultado = controlador.processOptions(parametros);
  console.log(resultado);
}

main();
