import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers"
import * as jsonfile from "jsonfile"
import { ContactsCollection } from "./models";

// test("Testeo el constructor del controller", (t) => {});

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController();
    const ContactsCollection = controller.contacts;
    ContactsCollection.load()

    const mockContact = {
        id: 37,
        name: "Nahuel"
    };

    ContactsCollection.addOne(mockContact);
    ContactsCollection.save();
    const fileContent = jsonfile.readFileSync("./contacts.json")

    t.deepEqual(fileContent, ContactsCollection.getAll());
  });

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions", (t) => {
    const controllerOptions = new ContactsControllerOptions();
    controllerOptions.action = "get";
    controllerOptions.params = { id: 37 };
    
    const controller = new ContactsController();
    const resultado = controller.processOptions(controllerOptions);
    
    const contacts = new ContactsCollection();
    contacts.load();
    const resultado2 = contacts.getOneById(37);

    t.deepEqual(resultado, resultado2)
    
})