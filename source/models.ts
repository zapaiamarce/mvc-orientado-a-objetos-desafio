import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.contacts = json;
  }
  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contacts);
  }
  getOneById(id: number) {
    const objetoEncontrado = this.contacts.find((item) => {
      return (item.id = id);
    });
    return objetoEncontrado;
  }
}
export { ContactsCollection, Contact };
