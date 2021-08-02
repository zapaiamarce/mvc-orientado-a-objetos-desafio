import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
    const resultado = minimist(argv);
    return {
        action: resultado.action,
        params: JSON.parse(resultado.params),
    };
}

function main() {
    var paramsParsed = parseaParams(process.argv.slice(2));
    var contController = new ContactsController();
    contController.processOptions(paramsParsed);
}

main();
