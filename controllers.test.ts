import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController()
    const json = new ContactsCollection()
    json.load()
  t.deepEqual(controller.contacts, json)

});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const contacts = new ContactsCollection();
  const options = new ContactsControllerOptions()
  contacts.load()
  //get by Id
  options.action = "get",
  options.params = {
    id: 3
  }
t.deepEqual(controller.processOptions(options), contacts.getOneById(3))

//save contact
options.action = "save",
options.params = {
  id:45,
  name: "Pepe"
}
t.deepEqual(controller.processOptions(options), contacts.getOneById(45))
});