import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const load = controller.contacts.load();
  t.deepEqual(load, controller.contacts.load());
});

test("Testeo el método processOptions", (t) => {
  const contacto = new ContactsController();
  const getContacto = contacto.processOptions({
    action: "get",
    params: { id: 1, name: "Ana" },
  });
  t.deepEqual(getContacto, contacto.contacts.getOneById(1));
});
