import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  let mock = new ContactsController();
  let masMock = mock.contacts.data;
  let validar = mock.contacts.getAll();
  t.deepEqual(masMock, validar);
});

test("Testeo el método processOptions", (t) => {
  let mock = new ContactsController();
  const masMock = mock.processOptions({
    action: "get",
    params: { id: 3 },
  });
  const test = mock.contacts.getOneById(3);
  t.deepEqual(masMock, test);
});
