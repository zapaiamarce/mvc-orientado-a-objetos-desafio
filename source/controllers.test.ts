import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const collection = new ContactsCollection();
  const controller = new ContactsController(collection);
  collection.load();
  t.deepEqual(controller.contacts.getAll(), collection.getAll());
});

test("Testeo el método processOptions", (t) => {
  const collection = new ContactsCollection();
  const controller = new ContactsController(collection);

  const getWithId = controller.processOptions({
    action: "get",
    params: { id: 1 },
  });
  t.deepEqual(controller.contacts.getOneById(1), getWithId);

  const getWithoutId = controller.processOptions({
    action: "get",
    params: { name: "Ana" },
  });
  t.deepEqual(controller.contacts.getAll(), getWithoutId);

  controller.contacts.addOne({
    id: 5,
    name: "Alejo",
  });
  controller.contacts.save();

  const save = controller.processOptions({
    action: "save",
    params: { id: 5, name: "Alejo" },
  });
  t.deepEqual(controller.contacts.getAll(), save);
});
