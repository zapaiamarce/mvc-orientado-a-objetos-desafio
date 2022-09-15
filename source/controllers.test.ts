import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();

  t.truthy([controller.contacts]);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  var options: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  t.deepEqual(controller.processOptions(options), {
    id: 1,
    name: "Ana",
  });

  var options: ContactsControllerOptions = {
    action: "get",
    params: {},
  };
  t.deepEqual(controller.processOptions(options), [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
    { id: 3, name: "Mer" },
    { id: 4, name: "Dana" },
    { id: 33, name: "mervin" },
  ]);

  var options: ContactsControllerOptions = {
    action: "save",
    params: { id: 44, name: "Matias" },
  };
  controller.processOptions(options);
  t.deepEqual(controller.processOptions({ action: "get", params: {} }), [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
    { id: 3, name: "Mer" },
    { id: 4, name: "Dana" },
    { id: 33, name: "mervin" },
    { id: 44, name: "Matias" },
  ]);
});
