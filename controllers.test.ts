import test from "ava";
import { ContactsController } from "./controllers";
import { Contact } from "./models";

test("Testeo el constructor del controller 1", (t) => {
    const controller = new ContactsController()
    const e1 = controller.contacts.getAll()
    const e2 = controller.contacts.data
    const e3 = controller.contacts.getOneById(1)
    t.deepEqual(e1,e2)

    t.deepEqual(e1[0],e3)

});


test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController()

    const action = "get"
    const params = {id:1}
    const getYIdSolo = controller.processOptions(
        {
            action : action,
            params : params
        }
    )
    t.deepEqual(getYIdSolo,{ id: 1, name: 'Ana' })
});
