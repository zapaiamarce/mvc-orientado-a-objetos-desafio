import { ContactsController, ContactsControllerOptions } from "./controllers";
const minimist = require("minimist");

function parseaParams(argv: string[]): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const args = minimist(argv);

  // Extraer la acción y los parámetros
  const action = args.action || args._[0] || null;

  // Construir los parámetros según la acción
  let params: any = {};

  if (action === "get") {
    // Para get, el id puede venir como --id=1 o como segundo argumento
    if (args.id) {
      params.id = parseInt(args.id);
    } else if (args._[1]) {
      params.id = parseInt(args._[1]);
    }
  } else if (action === "save") {
    // Para save, extraer nombre e id
    params.name = args.name || args._[1];
    params.id = args.id ? parseInt(args.id) : Date.now(); // Generar ID si no se proporciona
  }

  return {
    action: action as "get" | "save" | null,
    params: params,
  };
}

async function main() {
  try {
    // Parsear argumentos de línea de comandos
    const options = parseaParams(process.argv.slice(2));

    // Instanciar el controller
    const controller = new ContactsController();

    // Esperar a que se carguen los datos
    await new Promise((resolve) => setTimeout(resolve, 100)); // Pequeña pausa para asegurar carga

    // Invocar processOptions
    const result = await controller.processOptions(options);

    // Imprimir la respuesta en la terminal
    if (typeof result !== "undefined") {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log("No se encontraron resultados");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
