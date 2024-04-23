import * as contacts from "./contacts.json";
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactsColl: { id: number; name: string }[] = [];
  load() {
    this.contactsColl = contacts;
    if (this.contactsColl.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  getAll() {
    return this.contactsColl;
  }
  addOne(contact: Contact) {
    this.contactsColl.push(contact);
  }
  save() {
    const file = "source/contacts.json";
    jsonfile.writeFileSync(file, this.contactsColl);
    return true;
  }
  getOneById(id: number) {
    const contacts = this.getAll();
    const res = contacts.find((contact: Contact) => {
      if (contact.id == id) {
        return contact;
      }
    });
    if (res !== undefined) {
      return res;
    } else {
      return contacts;
    }
  }
}

export { ContactsCollection };
