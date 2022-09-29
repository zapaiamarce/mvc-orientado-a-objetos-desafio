import test from "ava";
import * as jsonfile from "jsonfile";
import { ContactsController } from "./controllers";

let fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");

test("Testeo el constructor del controller", (t) => {
  const prueba = new ContactsController();
  //const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(fileContent, prueba.contacts.contactos);
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();

  //test ID
  const getWithId = model.processOptions({
    action: "get",
    params: { id: 1 },
  });
  const persona = fileContent[0];
  t.deepEqual(getWithId, persona);

  //test sin ID
  const getWithoutId = model.processOptions({
    action: "get",
    params: {},
  });
  t.deepEqual(getWithoutId, fileContent);

  //test Save
  model.processOptions({
    action: "save",
    params: { id: 10, name: "Mateico" },
  });
  model.contacts.save;
  fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");

  t.deepEqual(model.contacts.getAll(), fileContent);
});
