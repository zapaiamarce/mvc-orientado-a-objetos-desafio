import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.deepEqual(controller.contacts.getAll(), controller.contacts.data);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  t.deepEqual(
    controller.processOptions({
      action: "get",
      params: {
        id: 333,
      },
    }),
    {
      id: 333,
      name: "Alejandro 333",
    }
  );
});
