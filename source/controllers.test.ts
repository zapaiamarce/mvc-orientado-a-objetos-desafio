import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection, Contact } from "./models";

test("Testeo el constructor del controller", (t) => {
    // test de ejemplo
    t.truthy(true);
});

// devuelve un contacto en base al id que se pasa como arguento
test("Testeo el método processOptions (get con id)", (t) => {
    const model = new ContactsController();
    const test = model.contacts.getOneById(1);
    const resTest = model.processOptions({ action: "get", params: 1 });

    t.deepEqual(test, resTest);
});

// devuelve todos los contactos cuando no se pasa un 2do argumento
test("Testeo el método processOptions (get sin id)", (t) => {
    const model = new ContactsController();
    const test = model.contacts.getAll();
    const resTest = model.processOptions({ action: "get", params: null });

    t.deepEqual(test, resTest);
});

test("Testeo el método processOptions (save)", (t) => {
    let model = new ContactsController();
    const auxModel = new ContactsCollection(); // se usará como backup de los contactos
    auxModel.load();
    const mockContact = {
        id: 56,
        name: "Ale",
    };
    model.processOptions({ action: "save", params: mockContact });
    const tes = t.deepEqual(mockContact, model.contacts.getOneById(56));
    // se vuelven a cargar los contactos sin los agregados por el test para poder correrlo más de una vez
    auxModel.save();
});
