import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
	// test de ejemplo
	t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
	const contactController = new ContactsController();

	const proceso1 = contactController.processOptions({
		action: "get",
		params: {
			id: 1,
			name: "Ana",
		},
	});

	const proceso2 = contactController.processOptions({
		action: "get",
		params: {},
	});

	t.deepEqual(proceso1, { id: 1, name: "Ana" });

	t.deepEqual(proceso2, [
		{ id: 1, name: "Ana" },
		{ id: 2, name: "Paula" },
		{ id: 3, name: "Mer" },
		{ id: 4, name: "Dana" },
	]);

	const proceso3 = contactController.processOptions({
		action: "save",
		params: { id: 5, name: "Santiago" },
	});

	t.deepEqual(proceso3, { message: "Contacto guardado" });

	const proceso4 = contactController.processOptions({
		action: null,
		params: {},
	});

	t.deepEqual(proceso4, { message: "Acción no reconocida" });
});
