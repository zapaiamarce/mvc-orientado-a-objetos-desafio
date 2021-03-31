import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller",(t) =>{
    const test = new ContactsController();
    t.is(test.contacts.data, test.contacts.getAll());
})
// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions",(t) =>{
    const controller = new ContactsController();
    const options = controller.processOptions({
        action: "get",
        params: {id:2}
    })

    t.is(controller.contacts.getOneById(2), options)

})