import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
    // parsear el argv usando https://www.npmjs.com/package/minimist
    const resultado = minimist(argv);
    console.log(resultado);
    return {
        action: resultado.action,
        params: JSON.parse(resultado.parametro),
    };
}

function main() {
    const controller = new ContactsController();
    //console.log(process.argv);
    const params = parseaParams(process.argv);
    //console.log(params);
    const result = controller.processOptions(params);
    console.log(result);
}
main();
