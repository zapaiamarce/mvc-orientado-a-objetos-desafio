import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

// test("Testeo el constructor del controller", (t) => {});
 test("Testeo el constructor del controller", (t) => {
     const controller = new ContactsController()
     const fileContent = jsonfile.readFileSync("./contacts.json");
    t.deepEqual(controller.contacts.contacts, fileContent)
 });

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();
    const fileContent = jsonfile.readFileSync("./contacts.json");

    const mockOptions = new ContactsControllerOptions()
    mockOptions.action = "get"
    mockOptions.params = false
    t.deepEqual(controller.processOptions(mockOptions), fileContent)
});