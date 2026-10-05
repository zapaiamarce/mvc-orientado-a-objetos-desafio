import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  let cambio = false;

  const mockLoad = () => {
    cambio = true;
  };

  const originalLoad = ContactsCollection.prototype.load;

  ContactsCollection.prototype.load = mockLoad;

  const controller = new ContactsController();

  t.true(cambio);

  ContactsCollection.prototype.load = originalLoad;
});

test("Testeo el método processOptions", (t) => {
  const originalLoad = ContactsCollection.prototype.load;

  ContactsCollection.prototype.load = function () {
    this.data = [
      { id: 1, name: "mock 1" },
      { id: 2, name: "mock 2" },
    ];
  };

  const controller = new ContactsController();
  let resultado = controller.processOptions({ action: "get", params: {} });

  const getSinId = controller.contacts.getAll();

  t.deepEqual(resultado, getSinId);

  resultado = controller.processOptions({ action: "get", params: { id: 2 } });

  const getConId = controller.contacts.getOneById(2);

  t.deepEqual(resultado, getConId);

  resultado = controller.processOptions({
    action: "save",
    params: { id: 3, name: "nuevo" },
  });

  const saveConIdYName = controller.contacts.getAll();
  t.deepEqual(saveConIdYName.length, 3);

  const contactoNuevo = controller.contacts.getOneById(3);
  t.deepEqual(contactoNuevo, { id: 3, name: "nuevo" });

  ContactsCollection.prototype.load = originalLoad;
});
