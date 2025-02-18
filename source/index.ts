import minimist = require("minimist");
import { ContactsController, ContactsControllerOptions } from "./controllers";

// para que funcione, debemos pasar params entre comillas
function parseaParams(argv): ContactsControllerOptions {
    // parsear el argv usando https://www.npmjs.com/package/minimist
    const salida = minimist(argv);

    // se devuelve el input parseado
    return {
        action: salida["action"],
        params: JSON.parse(salida["params"]),
    };
}

function main() {
    const controller = new ContactsController();
    const params = parseaParams(process.argv.slice(2));

    const res = controller.processOptions(params);
    console.log(res);
}

main();
