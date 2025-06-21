import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();

  t.true(controller.contacts instanceof ContactsCollection);

  t.true(controller.contacts.dataContacts.length > 0);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  const contactByid = controller.processOptions({
    action: "get",
    params: { id: 4 },
  });
  t.deepEqual(
    {
      id: 4,
      name: "Dana",
    },
    contactByid
  );

  const notFoundContact = controller.processOptions({
    action: "get",
    params: { id: 5 },
  });
  t.is(notFoundContact, "Contacto no encontrado");

  const allContacts = controller.processOptions({
    action: "get",
  });

  t.deepEqual(
    [
      {
        id: 1,
        name: "Ana",
      },
      {
        id: 2,
        name: "Paula",
      },
      {
        id: 3,
        name: "Mer",
      },
      {
        id: 4,
        name: "Dana",
      },
    ],
    allContacts
  );

  const wrongSaved = t.throws(
    () => {
      controller.processOptions({
        action: "save",
        params: { id: 123 },
      });
    },
    { instanceOf: Error }
  );
  t.is(wrongSaved.message, "Faltan datos para guardar el contacto.");
});
