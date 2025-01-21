import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection, Contact } from "./models";

test("Testeo el constructor del controller", (t) => {
    // test de ejemplo
    t.truthy(true);
});

test("Testeo el método processOptions (get con id)", (t) => {
    const model = new ContactsController();
    const test = model.contacts.getOneById(1);
    const resTest = model.processOptions({ action: "get", params: 1 });

    t.deepEqual(test, resTest);
});

test("Testeo el método processOptions (get sin id)", (t) => {
    const model = new ContactsController();
    const test = model.contacts.getAll();
    const resTest = model.processOptions({ action: "get", params: null });

    t.deepEqual(test, resTest);
});

test("Testeo el método processOptions (save)", (t) => {
    const model = new ContactsController();
    const mockContact = {
        id: 56,
        name: "Ale",
    };
    model.processOptions({ action: "save", params: mockContact });
    const tes = t.deepEqual(mockContact, model.contacts.getOneById(56));
});
