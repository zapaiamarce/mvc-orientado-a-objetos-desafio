import test from "ava";

import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.deepEqual(controller.contacts.getOneById(1), { id: 1, name: "Ana" });
  console.log(controller.contacts.getOneById(1));
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  controller.processOptions({
    action: "get",
    params: { id: 1 },
  });
  t.deepEqual(controller.contacts.getOneById(1), { id: 1, name: "Ana" });
  console.log(controller.contacts.getOneById(1));
});
