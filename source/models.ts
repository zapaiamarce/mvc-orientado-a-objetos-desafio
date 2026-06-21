// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];
  async load() {
    return new Promise((resolve, reject) => {
      import("jsonfile").then((jsonfile) => {
        jsonfile.readFile("./source/contacts.json", (err, data) => {
          if (err) {
            reject(err);
          } else {
            this.contacts = data;
            resolve(this.contacts);
          }
        });
      });
    });
  }

  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    return new Promise((resolve, reject) => {
      import("jsonfile").then((jsonfile) => {
        jsonfile.writeFile("./source/contacts.json", this.contacts, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(this.contacts);
          }
        });
      });
    });
  }
  getOneById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}
export { ContactsCollection };
