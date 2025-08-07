import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

// Ruta al archivo JSON
const CONTACTS_FILE = __dirname + "/contacts.json";

// Limpiar el archivo antes de cada test para asegurar consistencia
test.beforeEach(() => {
  jsonfile.writeFileSync(CONTACTS_FILE, "[]");
});

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts); // que tenga la propiedad "contacts"
});

// 🟡 Caso 1: get con ID
test("Testeo processOptions con action 'get' y un id", (t) => {
  const controller = new ContactsController();
  controller.contacts.addOne({ id: 1, name: "Martin" });
  controller.contacts.save();

  const result = controller.processOptions({
    action: "get",
    params: { id: 1 },
  });

  t.deepEqual(result, { id: 1, name: "Martin" });
});

// 🟢 Caso 2: get sin ID
test("Testeo processOptions con action 'get' sin id", (t) => {
  const controller = new ContactsController();
  controller.contacts.addOne({ id: 2, name: "Carlos" });
  controller.contacts.save();

  const result = controller.processOptions({
    action: "get",
    params: {},
  });

  t.deepEqual(result, [{ id: 2, name: "Carlos" }]);
});

// 🔵 Caso 3: save
test("Testeo processOptions con action 'save'", (t) => {
  const controller = new ContactsController();

  controller.processOptions({
    action: "save",
    params: { id: 5, name: "Lucía" },
  });

  const file = jsonfile.readFileSync(CONTACTS_FILE);
  const contactoGuardado = file.find((c) => c.id === 5);

  t.deepEqual(contactoGuardado, { id: 5, name: "Lucía" });
});
