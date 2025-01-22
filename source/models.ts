// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";
import { find } from "lodash";

class Contact {
    id: number = 0;
    name: string = "";
}

class ContactsCollection {
    contacts: Contact[] = [];

    // carga la lista interna de contactos con datos externos (contacts.json)
    load() {
        const data = jsonfile.readFileSync(__dirname + "/contacts.json");
        data.map((contact: Contact) => {
            this.addOne(contact);
        });
    }

    // devuelve una copia de la lista interna de contactos
    getAll(): Contact[] {
        return [...this.contacts];
    }

    // agrega un contacto a la lista interna de contactos
    addOne(contact: Contact) {
        this.contacts.push(contact);
    }

    // guarda la lista interna de contactos en un archivo externo
    save() {
        // Esto no funciona ya que al pasar un string JSON generado con JSON.stringify,
        // se pasa un sring serializado con caracteres escapados y todo lo cual no coincide
        // con el argumento esperado por jsonfile.writeFileSync()
        // const data = JSON.stringify(this.contacts, null, 2);

        // Escribimos el archivo contacts.json
        // Lo correcto es pasar como argumento el dato a escribir directamente
        jsonfile.writeFileSync(__dirname + "/contacts.json", this.contacts, { spaces: 2 });
    }

    // devuelve un contacto en base al id pasado como argumento
    getOneById(id: number) {
        const ret = find(this.contacts, (contact) => contact.id === id);
        return ret;
    }
}

export { ContactsCollection, Contact };
