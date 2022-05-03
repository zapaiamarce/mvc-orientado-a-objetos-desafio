import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller 1", (t) => {
    const controller = new ContactsController()
    const g1 = controller.contacts.getAll()
    const g2 = controller.contacts.cosa
    const g3 = controller.contacts.getOneById(1)
    t.deepEqual(g1,g2)

    t.deepEqual(g1[0],g3)

});


test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController()

    const action = "get"
    const params = {id:2}
    const getYIdSolo = controller.processOptions(
        {
            action : action,
            params : params
        }
    )
    t.deepEqual(getYIdSolo,{ id: 2, name: 'paula' })
});