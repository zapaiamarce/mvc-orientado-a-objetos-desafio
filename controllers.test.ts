import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile"

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController();
    const contactos = jsonfile.readFileSync("./contacts.json")
    t.deepEqual(controller.contacts.data, contactos)
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();
    const contactos = jsonfile.readFileSync("./contacts.json")
    const mockOptions = new ContactsControllerOptions();
    mockOptions.action = "get";
    mockOptions.params = false
   t.deepEqual(controller.processOptions(mockOptions),contactos)
});
