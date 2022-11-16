import test from "ava";
import { ContactsController } from "./controllers";
import * as js from 'jsonfile';

test("Testeo el constructor del controller", (t) => {
  const mockController = new ContactsController()
  const fileContent = js.readFileSync(__dirname + '/contacts.json');
  t.deepEqual(fileContent, mockController.contacts.getAll())
});

test("Testeo el método processOptions", (t) => {
  const mockController = new ContactsController();
  const mockContact = {
    id: 123,
    name: "Luffy"
  };
  const fileContent = js.readFileSync(__dirname + '/contacts.json');
  t.deepEqual(fileContent, mockController.processOptions({action: "get",params:{}}));
  mockController.processOptions({action: "save", params: mockContact});
  t.deepEqual(mockContact, mockController.processOptions({action:"get",params:{id:123}}))
});
