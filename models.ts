import * as fs from "fs";
import * as jsonfile from "jsonfile";

const contactsJson = fs.readFileSync("./contacts.json").toString();
var contacts = JSON.parse(contactsJson);

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load () {
    this.data = contacts;
  }
  getAll(){
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push (contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    const resultado = this.data.find(function(contact) {
      return id == contact.id;
    });
    return resultado;
  }
};

export {ContactsCollection};
