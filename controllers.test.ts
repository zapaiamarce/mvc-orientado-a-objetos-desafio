import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const collectionTest = new ContactsCollection();
  collectionTest.load();
  const contactoTest = { id: 15, name: "KirikuTest" };
  collectionTest.addOne(contactoTest);
  collectionTest.save();

  const controllerTest = new ContactsController();

  t.deepEqual(controllerTest.contactCollections.data, collectionTest.data);
});

test("Testeo el método processOptions", (t) => {
  var collectionTest2 = new ContactsCollection();
  collectionTest2.load();
  var controllerTest2 = new ContactsController();

  var newControllerOptionsTest = new ContactsControllerOptions(); // Devuelve Un Contacto {name: "KirikuTest", id: 15}
  newControllerOptionsTest = {
    action: "get",
    params: { id: 15, name: "KirikuTest" },
  };
  var newControllerOptionsAll = new ContactsControllerOptions(); //Como el id no existe, deberia devolver todo
  newControllerOptionsAll = {
    action: "get",
    params: { name: "kuso" },
  };

  t.deepEqual(
    controllerTest2.processOptions(newControllerOptionsTest), // recibe "get" y un id en params ( 1er opción )
    collectionTest2.getOneById(15)
  );
  t.deepEqual(
    controllerTest2.processOptions(newControllerOptionsAll), // recibe "get" pero no un id ( 2da opción)
    collectionTest2.getAll()
  );
});
test("Testeo el save del método processOptions", (t) => {
  var collectionTest3 = new ContactsCollection();

  var controllerTest3 = new ContactsController();

  var newControllerOptionsSave = new ContactsControllerOptions();
  newControllerOptionsSave = {
    action: "save",
    params: { id: 19, name: "Facundicoot" },
  };
  controllerTest3.processOptions(newControllerOptionsSave);
  collectionTest3.load();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, collectionTest3.getAll()); // recibe "save" y un contact ( 3era opción)
});
