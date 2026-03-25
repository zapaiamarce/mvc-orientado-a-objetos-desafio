import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller);
});

 test("Testeo el método processOptions con action inválida", (t) => {  
  const controller = new ContactsController();

  const result = controller.processOptions({
    action: "invalid" as any,
    params: {},
  });

  t.is(result, undefined);
});
test("processOptions get devuelve contactos", (t) => {
  const controller = new ContactsController();

  const result = controller.processOptions({
    action: "get",
    params: {},
  });

  t.true(Array.isArray(result));
});