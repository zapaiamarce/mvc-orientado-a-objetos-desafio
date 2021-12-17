import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
	const model = new ContactsController();
	t.deepEqual(model.contacts.getAll(), model.contacts.arrData);
});

test("Testeo el método processOptions", (t) => {
	const model = new ContactsController();

	t.deepEqual(model.processOptions({ action: "get", params: 2 }), {
		id: 2,
		name: "Paula",
	});

	model.processOptions({
		action: "save",
		params: '{ "id": 1234, "name": "Tobias" }',
	});

	t.deepEqual(model.contacts.getOneById(1234), { id: 1234, name: "Tobias" });
});
