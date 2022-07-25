import * as jsonfile from 'jsonfile';

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    data: Contact[] = [];
    load() {
        const contacts = jsonfile.readFileSync('./contacts.json');
        contacts.forEach((c) => {
            this.addOne(c);
        });
    }
    getAll() {
        return this.data;
    }
    addOne(contact: Contact) {
        this.data.push(contact);
    }
    save() {
        jsonfile.writeFileSync('contacts.json', this.data);
    }
    getOneById(id: number) {
        const contact = this.data.find((p) => {
            return p.id == id;
        });
        return contact;
    }
}

export { ContactsCollection };
