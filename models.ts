import * as jsonfile from "jsonfile";

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    data: Contact[] = [];

    load() {
        const json = jsonfile.readFileSync("./contacts.json");
        this.data = json;
    }

    getAll() {
        return this.data;
    }

    addOne(contact) {
        const lista = this.data;
        lista.push(contact);
    }

    save() {
        jsonfile.writeFileSync("./contacts.json", this.data);
    }

    getOneById(id) {
        return this.data.find((i) => {
            return i.id == id;
        });
    }
}
export { ContactsCollection };
