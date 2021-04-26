import test from "ava";
import { ContactsController } from "./controllers";
import * as contactObject from "./contacts.json"

test("Testeo el constructor del controller", (t) => {
  const mockModel = new ContactsController;
  t.deepEqual(contactObject, mockModel.contacts.getAll());
});

// test("Testeo el método processOptions", (t) => {
//   const mockModel = new ContactsController;
//   const option1 = { action: "get", params: {} }
//   const option2 = { action: "get", params: {id: 3} }
//   const option3 = { action: "save", params: {id: 7, name: "tete"}}
//   const firstResult = mockModel.processOptions(option1)
//   t.deepEqual(contactObject, firstResult)
//   const secondResult = mockModel.processOptions(option2)
//   const object2 = contactObject.find(i => i.id == 3)
//   t.deepEqual(object2, secondResult)
//   const thirdResult = mockModel.processOptions(option3)
//   const trial = mockModel.contacts.getAll().includes({id: 7, name: "tete"})
//   t.deepEqual(trial, thirdResult)
// });