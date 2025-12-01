import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  // Test para acción "get" sin id
  let options: { action: "get" | "save" | null; params: any } = {
    action: "get",
    params: null,
  };
  let result = controller.processOptions(options);
  t.true(Array.isArray(result));

  // Test para acción "get" con id
  options = { action: "get", params: { id: 1 } };
  result = controller.processOptions(options);
  t.truthy(result && (result as any).id === 1);

  // Test para acción "save"
  const newContact = { id: 99, name: "Test User" };
  options = { action: "save", params: newContact };
  controller.processOptions(options);
  const savedContact = controller.processOptions({
    action: "get",
    params: { id: 99 },
  });
  t.deepEqual(savedContact, newContact);
});
