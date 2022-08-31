import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";
import { ContactsCollection } from "./models";
import * as jsonfile from 'jsonfile';


test("Testeo el constructor del controller", (t) => {
  const testController = new ContactsController();
  const contactsCollection = new ContactsCollection();
  contactsCollection.load();
  t.deepEqual(testController.contacts, contactsCollection);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const result = controller.processOptions({
    action: "get",
    params: {
      id: 3
    }
  });
  t.deepEqual(result, {
    "id": 3,
    "name": "Mer"
  } );
});
