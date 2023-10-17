import * as minimist from 'minimist';
import { ContactsController, ContactsControllerOptions } from './controllers';

function parseaParams(argv): ContactsControllerOptions {
	const resultado = minimist(argv);
	return {
		action: resultado['action'],
		params: JSON.parse(resultado['params']),
	};
}

function main() {
	const controller = new ContactsController();
	const params = parseaParams(process.argv.slice(2));
	// console.log(params);
	console.log(controller.processOptions(params));
}
main();
