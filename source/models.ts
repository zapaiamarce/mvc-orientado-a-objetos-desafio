// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";
import { find } from "lodash";
import fs from "fs";

class Contact {
    id: number = 0;
    name: string = "";
}

class ContactsCollection {
    contacts: Contact[] = [];

    load() {
        const data = jsonfile.readFileSync(__dirname + "/contacts.json");
        data.map((contact: Contact) => {
            this.addOne(contact);
        });
    }

    getAll(): Contact[] {
        return [...this.contacts];
    }

    addOne(contact: Contact) {
        this.contacts.push(contact);
    }

    save() {
        // Convertimos los contactos a formato JSON
        const data = JSON.stringify(this.contacts, null, 2);
        console.log(data);

        // Escribimos el archivo contacts.json
        // fs.writeFileSync("contacts.json", data, "utf8");
        jsonfile.writeFileSync(__dirname + "/contacts.json", this.contacts, { spaces: 2 });
    }

    getOneById(id: number) {
        const ret = find(this.contacts, (contact) => contact.id === id);
        return ret;
    }
}

// const res = new ContactsCollection();
// res.load();
// const data = jsonfile.readFileSync(__dirname + "/contacts.json");
// console.log(res.getAll());
// console.log(data);

// const mockContact = {
//     id: 30,
//     name: "Marce",
// };

// const data1 = JSON.stringify(res, null, 2);
// jsonfile.writeFile("C:/Users/Ale/Documents/Code/apx/Typescript/mvc-orientado-a-objetos-desafio/contacts.json", data, { spaces: 2 });

// console.log(data1);

// res.addOne(mockContact);
// console.log(res.getAll());

export { ContactsCollection };
