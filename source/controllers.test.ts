import test from "ava";
import { ContactsController } from "./controllers";
import { readFile } from "./models";

/* 
  constructor() {
    const contColl = new ContactsCollection();
    this.contacts = contColl;
    contColl.load();
  }
*/
test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const contrllr = new ContactsController();
  const data = readFile("source/contacts.json");
  const contrllrContacts = contrllr.contacts.getAll();
  t.deepEqual(contrllrContacts, data);
});

test("Testeo el método processOptions", (t) => {
  const contrllr = new ContactsController();
  const mockContact = contrllr.contacts.getOneById(1);
  const testGet = contrllr.processOptions({ action: "get", params: { id: 1 } });
  t.deepEqual(mockContact, testGet);
  /* contrllr.processOptions({
    action: "save",
    params: { id: 6, name: "Arturo" },
  });

  let res = contrllr.contacts.contacts.find((c) => c.id == 6);
  console.log("RES :", res);
  if (res) {
    let index = contrllr.contacts.contacts.indexOf(res);
    t.deepEqual(contrllr.contacts.contacts[index], {
      id: 6,
      name: "Arturo",
    });
    contrllr.contacts.contacts = contrllr.contacts.contacts.splice(index, 1);
  } */
});
