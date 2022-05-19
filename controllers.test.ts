import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const testConstContr = new ContactsController();
  testConstContr.contacts.load();
  const dataModels = testConstContr.contacts.getAll();
  var dataJson = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(dataModels, dataJson);
});
test("Testeo el método processOptions", (t) => {
  const testProcOpt = new ContactsController();
  const probandoCero = testProcOpt.processOptions({
    action: "get",
    params: { id: 1 },
  });
  const probandoUno = testProcOpt.processOptions({
    action: "get",
    params: {},
  });
  const probandoDos = testP.processOptions({
    action: "save",
    params: { id: 12, name: "Ivo" },
  });

  var dataJson = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(dataJson[0], probandoCero);
  t.deepEqual(probandoUno, dataJson);
  t.deepEqual(probandoDos, testP.contacts.save[1]);
});
