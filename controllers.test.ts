import test from "ava";
import { ContactsController } from "./controllers";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller", (t) => {
    const objetoPrueba = new ContactsController();
    t.is(objetoPrueba.contacts.data, objetoPrueba.contacts.getAll());
});

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions", (t) => {
    const object = new ContactsController();
    const resultadoProcess = object.processOptions({
        action: "get",
        params: { id: 4 },
    });
    t.is(resultadoProcess, object.contacts.data[3]);
});
