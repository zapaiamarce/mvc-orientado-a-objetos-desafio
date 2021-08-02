import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";
import {ContactsCollection} from "./models";

test("Testeo el constructor del controller", (t) => {
    var contController = new ContactsController();
    var mock = new ContactsCollection();
    mock.load();
    t.deepEqual(contController.contacts,mock);
});

test("Testeo el método processOptions", (t) => {
    var contController = new ContactsController();
    var mock = new ContactsControllerOptions();
    var ContCollection = new ContactsCollection();
    ContCollection.load()
    mock.action = "get";
    mock.params = {
        id : "23",
    };
    t.deepEqual(contController.processOptions(mock), ContCollection.getOneById(23));
});
