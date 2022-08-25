import test from "ava";
import { ContactsController } from "./controllers";
import {ContactsCollection} from "./models"

// test("Testeo el constructor del controller", (t) => {
//   // test de ejemplo
//   t.truthy(true);
// });


test("Testeo el método processOptions GET", (t) => {
  let mocketGet = new ContactsCollection()
  mocketGet.load()
  let mocketGetId = mocketGet.getOneById(20)
  let contactControl = new ContactsController()
  let contactControlId = contactControl.processOptions({action:"get",params:20})
  t.deepEqual(mocketGetId,contactControlId)

});

test("Testeo el metodo processOptions SAVE",t=>{
  let mocketSave = new ContactsCollection()
  mocketSave.load()
  let contactControl = new ContactsController()
  contactControl.processOptions({action:"save",params:{id:30,name:"Gybriel"}})
  t.deepEqual(mocketSave.getAll(),contactControl.processOptions({action:"get",params:35}))
})
