import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const contactController = new ContactsController();
  const contactColl = contactController.contactsColl;
  const contactMock = { id: 777, name: "Maximo Rossini" };
  contactColl.addOne(contactMock);
  const all = contactColl.getAll();
  contactColl.save();
  t.deepEqual(all[all.length - 1], contactMock);
});

test("Testeo el método processOptions", (t) => {
  const contactController = new ContactsController();
  const mockVal = {
    action: "get",
    params: { id: 777 },
  };
  const result = contactController.processOptions(mockVal);
  t.deepEqual(result, { id: 777, name: "Maximo Rossini" });
});
