import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  var testController = new ContactsController();
  var dataTestController = testController.contacts;
  var testCollection = new ContactsCollection();
  testCollection.load();
  var dataTestCollection = testCollection.data;
  t.deepEqual(dataTestController.data, dataTestCollection);
});

test("Testeo el método processOptions", (t) => {
  var testControllerOptions = new ContactsControllerOptions();
  testControllerOptions.action = "get";
  testControllerOptions.params = { id: 1 };
  var testContactsController = new ContactsController();
  var testProcess = testContactsController.processOptions(
    testControllerOptions
  );
  var testContactsCollection = new ContactsCollection();
  testContactsCollection.load();
  var contactMock = testContactsCollection.getOneById(1);
  t.deepEqual(contactMock, testProcess);
});
