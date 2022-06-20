import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController()
    const e1 = controller.contacts.getAll()
    const e2 = controller.contacts.data
    t.deepEqual(e1,e2)
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController()
    const action = "get"
    const params = {id:1}
    const getYIdSolo = controller.processOptions({
            action : action,
            params : params
        }
    )
    t.deepEqual(getYIdSolo,{ id: 1, name: 'Ana' })
});
