import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  controller.contacts.load();
  const dataModel = controller.contacts.getAll();
  let dataJson = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(dataModel, dataJson);
});

test("Testeo el método processOptions", (t) => {
  const testProcOpti = new ContactsController();
  const testa0 = testProcOpti.processOptions({
    action: "get",
    params: { id: 1 },
  });
  const testa1 = testProcOpti.processOptions({
    action: "get",
    params: {},
  });
  const testa2 = testProcOpti.processOptions({
    action: "save",
    params: { id: 32, name: "test" },
  });
  let dataJson = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(dataJson[0], testa0);
  t.deepEqual(testa1, dataJson);
  t.deepEqual(testa2, testProcOpti.contacts.save());
});
