import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const testConstContr = new ContactsController();
  const dataModels = testConstContr.contacts.getAll();
  const dataJson = jsonfile.readFileSync("./contacts.json");
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
  const probandoDos = testProcOpt.processOptions({
    action: "save",
    params: { id: 12, name: "Ivo" },
  });
  const dataJson = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(dataJson[0], probandoCero);
  t.deepEqual(dataJson, probandoUno);
  t.deepEqual(testProcOpt.contacts.save(), probandoDos);
});
