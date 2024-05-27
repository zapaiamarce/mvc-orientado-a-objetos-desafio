import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método get con id processOptions", (t) => {
  const controller = new ContactsController();
  controller.processOptions({ action: "get", params: { id: 1 } });
  t.truthy(true);
});

test("Testeo el método get distinto de numero processOptions", (t) => {
  const controller = new ContactsController();
  controller.processOptions({ action: "get", params: "null" });
  t.truthy(true);
});

test("Testeo el método save de processOptions", (t) => {
  const controller = new ContactsController();
  controller.processOptions({ action: "save", params: { id: 1 } });
  t.truthy(true);
});
