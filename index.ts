import { ContactsController, ContactsControllerOptions } from './controllers';
import * as minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
	const resultado = minimist(argv);
	return {
		action: resultado.action,
		params: JSON.parse(resultado.params),
	};
}

function main() {
	const nuevoControladorDeContactos = new ContactsController();
	const parseoArgvs = parseaParams(process.argv.slice(2));
	const resultadoFinal = nuevoControladorDeContactos.processOptions(parseoArgvs);
	console.log(resultadoFinal);
}

main();
