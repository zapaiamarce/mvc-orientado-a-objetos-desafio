import "./contacts.json";
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  private data: Contact[] = [];

  load() {
    this.data = jsonfile.readFileSync(__dirname + "/contacts.json");
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact){
    this.data.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + "/contact.json", this.data);
  }

  getOneById(id: number){
    return this.data.find((contact) => contact.id == id);
  }
}
export { ContactsCollection };
