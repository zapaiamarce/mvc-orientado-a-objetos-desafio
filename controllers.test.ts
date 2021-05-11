import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
    const model = new ContactsController();
    const fileContent = jsonfile.readFileSync("./contacts.json");
    t.deepEqual(fileContent, model.contacts.data);
});

test("Testeo el método processOptions", (t) => {
    const model = new ContactsController();
    const fileContent = jsonfile.readFileSync("./contacts.json");
    const mockOptions = new ContactsControllerOptions();
    mockOptions.action = "get";
    mockOptions.params = 1;
    t.deepEqual(fileContent, model.processOptions(mockOptions));
});
