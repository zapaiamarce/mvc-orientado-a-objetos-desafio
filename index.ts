import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";
function parseaParams(argv): ContactsControllerOptions {
    const opciones = minimist(argv);
    return {
        action: opciones.action,
        params: JSON.parse(opciones.params),
    };
}

function main() {
    const opciones = parseaParams(process.argv.slice(2));
    const controlador = new ContactsController();
    const resultado = controlador.processOptions(opciones);
    console.log(resultado);
}

main();
