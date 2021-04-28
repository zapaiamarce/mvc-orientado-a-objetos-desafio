import * as jsonfile from "jsonfile";

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    contactData: Contact[] = [];

    // Método para guardar los contactos del JSON a la propiedad
    load() {
        // Abre el archivo
        const file = jsonfile.readFileSync("./contacts.json");

        // Guarda los datos en la propiedad
        this.contactData = file;
    }

    // Método para obtener la colección completa
    getAll() {
        return this.contactData;
    }

    // Método para agregar un contacto a la lista
    addOne(contact: Contact) {
        this.contactData.push(contact);
    }

    // Método para guardar todo el contenido de la lista/array al JSON
    save() {
        jsonfile.writeFileSync("./contacts.json", this.contactData);
    }

    // Método para obtener uno de los contactos por ID
    getOneById(id: number) {
        // Hago la búsqueda
        const busqueda = this.contactData.find((item) => item.id == id);

        return busqueda;
    }
}

// EXPORTO
export { ContactsCollection };
