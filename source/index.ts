/*import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {}

main();*/
// Importamos el controlador y el tipo de opciones
import { ContactsController, ContactsControllerOptions } from "./controllers";

// Importamos minimist para procesar los argumentos de consola
import minimist from "minimist";

// Esta función convierte los argumentos en un objeto de tipo ContactsControllerOptions
function parseaParams(argv: string[]): ContactsControllerOptions {
  const args = minimist(argv);

  // Si se usa "get" y se pasa un id (por ejemplo --id=2)
  if (args._[0] === "get") {
    return {
      action: "get",
      params: { id: args.id },
    };
  }

  // Si se usa "save" con un contacto (por ejemplo --id=5 --name=Lucas)
  if (args._[0] === "save") {
    return {
      action: "save",
      params: { id: args.id, name: args.name },
    };
  }

  // Si no coincide con ninguna acción conocida
  return {
    action: null,
    params: null,
  };
}

// Función principal del programa
function main() {
  const controller = new ContactsController(); // Creamos el controlador
  const params = parseaParams(process.argv.slice(2)); // Parseamos argumentos
  const resultado = controller.processOptions(params); // Ejecutamos acción
  console.log(resultado); // Mostramos el resultado
}

// Ejecutamos el programa
main();

