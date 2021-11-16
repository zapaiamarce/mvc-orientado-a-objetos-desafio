import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const load = controller.contacts.load();
  t.deepEqual(load, controller.contacts.load());
});

test("Testeo el método processOptions", (t) => {
  const contacto = new ContactsController();
  const option = new ContactsControllerOptions();
  option.action = "get";
  option.params = 1;
  const getContacto = contacto.processOptions(option);
  t.deepEqual(getContacto, contacto.contacts.getOneById(1));
});
