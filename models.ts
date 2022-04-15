import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contact: Contact[] = [];
  load(){
    // Esta forma nueva: jsonfile.readFileSync("./contacts.json")
    // es igual que: JSON.parse(fs.readFileSync(__dirname + "/contacts.json").toString());
    const data = jsonfile.readFileSync("./contacts.json");
    this.contact = data;
  }
  getAll(){
    return this.contact;
  }
  addOne(contact: Contact){
    this.contact.push(contact)
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.contact);
  }
  getOneById(id){
    return this.contact.find((contacto) => contacto.id == id)
  }
}

export { ContactsCollection };
