import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const contactController = new ContactsController;

  const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
  const mock1 = {
    "id": 1,
    "name": "Ana"
  };

  const contact1 = contactController.processOptions(
    {
      action : 'get',
      params : 1
    }
  );

  const allContactsTest = contactController.processOptions(
    {
      action: 'get',
      params: null
    }
  );

  
  
  t.deepEqual(contact1, mock1);
  t.deepEqual(allContactsTest, fileContent);

});
