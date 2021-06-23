import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";


test("Testeo el constructor del controller", (t) => {
    const constructorr = new ContactsController()
    const contactsCollection = constructorr.contacts
    contactsCollection.load()
    const mockContact = {
        id: 50,
        name: "Dani",
      };
      contactsCollection.addOne(mockContact);
      contactsCollection.save();
      const fileContent = jsonfile.readFileSync("./contacts.json");
      t.deepEqual(fileContent, contactsCollection.getAll());
    
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();
    const controllerDos = new ContactsController();
  
    const mockOptions = new ContactsControllerOptions();
    const mockOptionsDos = new ContactsControllerOptions();
  
    mockOptions.action = "get";
    mockOptions.params = { id: 2, name: "Paula" };
  
    mockOptionsDos.action = "save";
    mockOptionsDos.params = { id: 1, name: "Ana" };
  
    const pruebaGet = controller.processOptions(mockOptions);
    controllerDos.processOptions(mockOptionsDos);
  
    t.deepEqual(controller.contacts.getOneById(2), pruebaGet);
    t.deepEqual(controllerDos.contacts.getOneById(1), mockOptionsDos.params);
})
