import test from "ava";
import { ContactsController } from "./controllers";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller", (t) => {
    const unaPruebita = new ContactsController();

    // Hago la prueba
    t.is(unaPruebita.contacts.contactData, unaPruebita.contacts.getAll());
});

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions", (t) => {
    const unaPruebita = new ContactsController();

    // Hago el test
    t.is(
        unaPruebita.processOptions({
            action: "get",
            params: { id: 1 },
        }),
        unaPruebita.contacts.contactData[0]
    );
});
