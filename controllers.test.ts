import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
// import { Contact } from "./models"
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
    const controller  = new ContactsController;
    const contactList = jsonfile.readFileSync('./contacts.json');
    t.deepEqual(controller.contacts.data,contactList, "Test no pasado.");
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController;

    const mockContact = {
        id: 9,
        name: "Seba",
      };

    const optionGet = new ContactsControllerOptions("get", 3);
    const userFindedByContactsMethod = controller.contacts.getOneById(3);
    const userFinded = controller.processOptions(optionGet);

    t.is(userFinded, userFindedByContactsMethod, "Test no pasò, no son inguales.");
});
