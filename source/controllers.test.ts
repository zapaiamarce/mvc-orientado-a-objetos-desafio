import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controllerTest = new ContactsController;
  const listaContactos = controllerTest.contacts.getAll();
  if (listaContactos.length === 4) {
    t.truthy(true);
  }
});

test("Testeo el método processOptions", (t) => {
  const controllerTest = new ContactsController;
  const listaContactos = controllerTest.contacts.getAll();

  let testGetActionWithParams = false;
  let testGetActionWithoutParams = false;
  let testPushAction = false;
  let testSaveAction = false;
  
  const contactID1 = controllerTest.processOptions({action: "get", params: {id: 1}});

  if (Object.entries(contactID1).length === 2)
  {
    testGetActionWithParams = true;
  }

  const allContacts = controllerTest.processOptions({action: "get", params: ""});

  if (Object.entries(allContacts).length === 4) {
    testGetActionWithoutParams = true;
  }

  const newContact = {
    id: 30,
    name: "Rada"
  }

  controllerTest.processOptions({action: "save", params: newContact});

  const nuevaListaContactos = controllerTest.processOptions({action: "get", params: ""});

  if (Object.entries(nuevaListaContactos).length === 5) {
    testPushAction = true;
    
  }

  const nuevoArchivoListaContactos = controllerTest.contacts.getAll();

  if (Object.entries(nuevoArchivoListaContactos).length === 5) {
    testSaveAction = true;
  }
  if ((testGetActionWithParams === true) && 
     (testGetActionWithoutParams === true) && 
     (testPushAction === true) && 
     (testSaveAction === true)) {
    
    t.truthy(true);
  }

});
