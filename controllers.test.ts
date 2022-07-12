import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.deepEqual(contactsObject, controller.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const unUser = { id: 39, name: "Mariano" };

  controller.processOptions({ action: "save", params: unUser });
  t.deepEqual(
    unUser,
    controller.processOptions({ action: "get", params: { id: 39 } })
  );
  t.deepEqual(
    controller.contacts.getAll(),
    controller.processOptions({ action: "get", params: {} })
  );
});
