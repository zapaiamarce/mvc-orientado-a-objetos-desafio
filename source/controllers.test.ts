import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const allContacts = controller.processOptions({ action: "get", params: {} });
  t.true(Array.isArray(allContacts));
});

test("testeo el metodo processOption con id", (t) => {
  const controller = new ContactsController();
  const idContact = controller.processOptions({
    action: "get",
    params: { id: 1 },
  });
  t.deepEqual(idContact, { id: 1, name: "Ana" });
});
