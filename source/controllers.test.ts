import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

// test("Testeo el método processOptions", (t) => {});
test("processOptions con action save guarda un contacto", (t) => {
  const controller = new ContactsController();

  const newContact = {
    id: 10,
    name: "Pedro",
  };

  controller.processOptions({
    action: "save",
    params: newContact,
  });

  const result = controller.processOptions({
    action: "get",
    params: { id: 10 },
  });

  t.deepEqual(result, newContact);
});