import test from "ava";
import * as jFile from "jsonfile";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

// test("Testeo el constructor del controller", (t) => {
//   const contactsControll = new ContactsController();
//   const contactsCollection = new ContactsCollection();
//   const archivoJson = jFile.readFileSync("./contacts.json");

//   t.deepEqual(contactsCollection.data, archivoJson);
//   t.truthy(true);
// });

// test("Testeo el método processOptions", (t) => {});
