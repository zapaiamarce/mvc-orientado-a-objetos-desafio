"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimist_1 = require("minimist");
var controllers_1 = require("./controllers");
function parseaParams(argv) {
    // parsear el argv usando https://www.npmjs.com/package/minimist
    var args = (0, minimist_1.default)(argv);
    return {
        action: args['actions'] || null,
        params: args['params'] || null,
    };
}
/**
 * Funci n principal que se encarga de obtener los par metros desde el CLI,
 * instanciar el controlador, llamar al m todo processOptions y mostrar el resultado
 * por consola.
 */
function main() {
    var params = parseaParams(process.argv.slice(2));
    var controller = new controllers_1.ContactsController();
    var response = controller.processOptions(params);
    console.log(response);
}
main();
