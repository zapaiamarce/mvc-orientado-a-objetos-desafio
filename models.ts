import * as fs from 'fs';

class Contact {
    id: number;
    name: string;
}
function aperturaJSON(nombreArchivo: string) {
    const archivo = fs.readFileSync(__dirname + '/' + nombreArchivo);
    const archivoEnTexto = archivo.toString();
    return JSON.parse(archivoEnTexto);
}
class ContactsCollection {
    data: Contact[] = [];
    load() {
        const contacts = aperturaJSON('./contacts.json');
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
        const datos = this.getAll();
        const json = JSON.stringify(datos);
        fs.writeFileSync('contacts.json', json);
    }
    getOneById(id: number) {
        const contact = this.data.find((p) => {
            return p.id == id;
        });
        return contact;
    }
}

export { ContactsCollection };
