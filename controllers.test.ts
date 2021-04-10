import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as fs from "fs"

test("Testeo el constructor del controller", (t) => {
    const prueba = new ContactsController
    const contactos = prueba.contacts.getAll()
    const dataJson = fs.readFileSync(__dirname + "/contacts.json").toString()
    const arrayMock  = JSON.parse (dataJson)
    t.deepEqual(contactos,arrayMock);
});
    


 test("Testeo el método processOptions", (t) => {
     const prueba = new ContactsController
     const options = new ContactsControllerOptions()
     options.action = "get"
     options.params = {id: 1}
     const resultado = prueba.processOptions(options)
     const mock = {id: 1, name:"Ana"}

    t.deepEqual(resultado,mock);
 });


