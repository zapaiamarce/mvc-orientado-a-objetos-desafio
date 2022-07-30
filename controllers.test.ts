// VER SI EN DISCORD EXPLICAN COMO HACERLO.
import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
	const controllerContacts = new ContactsController();
	const jsonFile = jsonfile.readFileSync("./contacts.json");
	t.deepEqual(jsonFile, controllerContacts.contacts.listaDedata);
});

test("Testeo el método processOptions", (t) => {
	const controllerContacts = new ContactsController();
	const jsonFile = jsonfile.readFileSync("./contacts.json");

	const contactById = controllerContacts.processOptions({
		action: "get",
		params: 3,
	});
	t.deepEqual(contactById, { id: 3, name: "Mer" });

	const contactByIdWithParamsUndefined =
		controllerContacts.processOptions({
			action: "get",
			params: 80,
		});
	t.deepEqual(jsonFile, contactByIdWithParamsUndefined);

	const addContact = controllerContacts.processOptions({
		action: "save",
		params: { id: 15, name: "Nicolas" },
	});
	t.deepEqual(addContact, controllerContacts.contacts.getOneById(15));
});
