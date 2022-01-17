import test from "./node_modules/ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";
import { Contact, ContactsCollection } from "./models";
import * as jsonfile from "./node_modules/jsonfile";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();

  model.contacts.load();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, model.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const opciones = new ContactsControllerOptions();
  opciones.action = "get";
  opciones.params = { id: 1, name: "Ricardo" };
  t.deepEqual({ id: 1, name: "Ana" }, model.processOptions(opciones));
  opciones.action = "save";
  opciones.params.id = 7;
  opciones.params.name = "Mariano";
  var resultado = model.processOptions(opciones);
  model.contacts.addOne(opciones.params);
  model.contacts.save();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  console.log(resultado);
  console.log(fileContent);
  t.deepEqual(resultado, fileContent);
});
