import * as minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
    // parsear el argv usando https://www.npmjs.com/package/minimist
    const finalArgs = minimist(argv);

    // Auxiliar
    let parametrosFinales = "";

    if (finalArgs.params) {
        parametrosFinales = JSON.parse(finalArgs.params);
    }

    return {
        action: finalArgs.action,
        params: parametrosFinales,
    };
}

// Función principal
function main() {
    // Primero, instancio
    const controller = new ContactsController();

    // Obtengo los argumentos
    const argumentos = process.argv.slice(2);

    // Los proceso con minimist
    const argumentosParseados = parseaParams(argumentos);

    // Invoco al método para procesar
    const resultadoFinal = controller.processOptions(argumentosParseados);

    console.log("\n>>>\n", resultadoFinal);
}

// Ejecución del programa
main();
