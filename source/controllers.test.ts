import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller1 = new ContactsController();
  // console.log(controller1.processOptions({action: "get", params: 2}));
  t.deepEqual(controller1.processOptions({action: "get", params: 2}) ,{"id": 2,"name": "Paula"});
});
