import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  t.deepEqual(model.contacts.arrayData, model.contacts.getAll());
});

//Test método processOptions
test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const optionGet: ContactsControllerOptions = {
    action: "get",
    params: { id: 4 },
  };
  const optionSave: ContactsControllerOptions = {
    action: "save",
    params: { id: 12, name: "francisco" },
  };
  //testeo de la option Get
  t.deepEqual(model.processOptions(optionGet), { id: 4, name: "Dana" });

  //testeo del option save
  model.processOptions(optionSave);
  t.deepEqual(model.contacts.getOneById(12), { id: 12, name: "francisco" });
});
