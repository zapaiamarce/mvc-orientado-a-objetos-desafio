import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
const model = new ContactsController();
const mockContact = model.contacts.getAll()
t.deepEqual(contactsObject, mockContact);
});

test("Testeo el método processOptions", (t) => {
    //test: devover un contacto por su Id
    const model = new ContactsController();
    const mockContact = model.processOptions({action:"get", params:{id:2}});
    t.deepEqual(model.contacts.getOneById(2), mockContact);
    
    //test: dovelver todos los contactos
    const model1 = new ContactsController();
    const mockContact1 = model1.processOptions({action:"get", params:{}});
    t.deepEqual(model1.contacts.getAll(), mockContact1);
    
    //test: guardar un contacto
    const model2 = new ContactsController();
    const nuevoContact = model2.processOptions({
        action:"save",
        params:{id:789, name: "casio"}
    });
    const mockContact2 = model2.contacts.getOneById(789);
    t.deepEqual({id:789, name: "casio"}, mockContact2);
});
