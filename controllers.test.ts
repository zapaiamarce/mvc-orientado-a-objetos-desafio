import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", t => {
  const collection = new ContactsCollection();

  collection.load();

  const controller = new ContactsController();

  t.deepEqual(controller.contacts.data, collection.data);
});

test("Testeo el método processOptions", t => {
  const collection = new ContactsCollection();

  collection.load();

  const controller = new ContactsController();

  t.deepEqual(controller.contacts.data, collection.data);
});

test("Testeo el método processOptions", t => {
  const collection = new ContactsCollection();
  collection.load();

  const controller = new ContactsController();

  const options = new ContactsControllerOptions();

  controller.processOptions(options);

  if ((options.action = "get") && (options.params = { id: 3 })) {
    const search = controller.contacts.getOneById(options.params.id);

    t.deepEqual(options.params.id, search.id);
  }

  if ((options.action = "get")) {
    t.deepEqual(controller.contacts.data, collection.data);
  }

  if ((options.action = "save") && (options.params = { id: 5 })) {
    controller.contacts.addOne(options.params);

    t.deepEqual(
      options.params,
      controller.contacts.getOneById(options.params.id)
    );
  }
});
