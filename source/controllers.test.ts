import test from "ava";
import * as jsonfile from "jsonfile"
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const testMock = new ContactsController();
  testMock.contacts.getAll();

  t.truthy(testMock);
});

test("Testeo el método processOptions", (t) => {

  const testMock = new ContactsController();
  const paramsOne = {id: 4, name: "Dana" };
  const processOne = testMock.processOptions({action: "get", params: paramsOne});
  t.deepEqual(paramsOne, processOne);
  
  const paramsTwo = {name:"Franco"};
  const contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
  const processTwo = testMock.processOptions({action: "get", params: paramsTwo});
  t.deepEqual(processTwo, contactos);



  });
