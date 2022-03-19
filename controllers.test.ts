import test from 'ava';
import * as jsonfile from 'jsonfile';
import { ContactsController, ContactsControllerOptions } from './controllers';
// import { ContactsCollection } from './models';

test('Testeo el constructor del controller', (t) => {
	const nuevoController = new ContactsController();
	const contactos = jsonfile.readFileSync(__dirname + '/contacts.json');
	t.deepEqual(contactos, nuevoController.contacts['data']);
});

test('Testeo el método processOptions con get y param false', (t) => {
	const nuevoController = new ContactsController();
	const contactos = jsonfile.readFileSync(__dirname + '/contacts.json');
	const mockOptions = new ContactsControllerOptions();
	mockOptions['action'] = 'get';
	mockOptions['params'] = false;
	t.deepEqual(nuevoController.processOptions(mockOptions), contactos);
});

test('Testeo el método processOptions con get y param con id', (t) => {
	const nuevoController = new ContactsController();
	const contactos = jsonfile.readFileSync(__dirname + '/contacts.json');
	const mockOptions = new ContactsControllerOptions();
	mockOptions['action'] = 'get';
	mockOptions['params'] = 1;
	t.deepEqual(nuevoController.processOptions(mockOptions), contactos[0]);
});

// Ver como testear processOptions con save

// test('Testeo el método processOptions con save', (t) => {
// 	const nuevoController = new ContactsController();
// 	const mockOptions = new ContactsControllerOptions();
// 	mockOptions['action'] = 'save';
// 	mockOptions['params'] = {
// 		id: 50,
// 		name: 'Lucho',
// 	};
// 	const model = new ContactsCollection();
// 	model.load();
// 	t.deepEqual(nuevoController.processOptions(mockOptions), model['data']);
// });
