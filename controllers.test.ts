import test from "ava";
import { ContactsController } from "./controllers";
import * as contactObject from "./contacts.json"

test("Testeo el constructor del controller", (t) => {
  const mockModel = new ContactsController();
  t.deepEqual(contactObject, mockModel.data.contacts);
});

test("Testeo el método processOptions 'get' sin id", (t) => {
  const mockModel = new ContactsController();
  const trial = mockModel.processOptions({ action: "get", params: {} });
  t.deepEqual(contactObject, trial);
});

test("Testeo el método processOptions 'get' con id", (t) => {
  const mockModel = new ContactsController();
  const catchTrial = mockModel.processOptions({
    action: "get",
    params: { id: 3 }
  })
  t.deepEqual({ id: 3, name: "Mer" }, catchTrial)
})