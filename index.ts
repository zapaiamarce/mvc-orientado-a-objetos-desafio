import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
	var argumentos = require("minimist")(argv.slice(2));
	return argumentos;
}

function main() {
	const controlador = new ContactsController();
	const resultado = controlador.processOptions(parseaParams(process.argv));

	if (resultado == undefined) {
		console.log(controlador.contacts);
	} else {
		console.log(resultado);
	}
}

main();
