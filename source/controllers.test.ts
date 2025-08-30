const fs = require("fs");
const path = require("path");
const test = require("ava");
const { ContactsController } = require("./controllers");

test.beforeEach(() => {
  fs.writeFileSync(path.join(__dirname, "contacts.json"), "[]");
});

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts);
  t.deepEqual(controller.contacts.getAll(), []);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  
  const mockContact = { id: 1, name: "Marce" };
  controller.contacts.addOne(mockContact);
  const result = controller.processOptions({ action: "get", params: { id: 1 } });
  t.deepEqual(result, mockContact);

  const allContacts = controller.processOptions({ action: "get", params: {} });
  t.deepEqual(allContacts, [mockContact]);

  const newContact = { id: 2, name: "Juan" };
  controller.processOptions({ action: "save", params: newContact });
  const savedContact = controller.contacts.getOneById(2);
  t.deepEqual(savedContact, newContact);
});
