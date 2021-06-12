import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const controlador = new ContactsController();
    const prueba = controlador.contacts;
    const collection = new ContactsCollection();
    collection.load();
    const contacts = collection.data;
    t.deepEqual(prueba.data, contacts);
});

test("Testeo el método processOptions", (t) => {
    const option = new ContactsControllerOptions();
    option.action = "get";
    option.params = { id: 1, name: "Ana" };

    const process = new ContactsController();
    const contacto = process.processOptions(option);

    const collection = new ContactsCollection();
    collection.load();
    const contactosDos = collection.getOneById(1);

    t.deepEqual(contacto, contactosDos);
});
