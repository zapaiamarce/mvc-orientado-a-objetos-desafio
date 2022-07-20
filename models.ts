import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  datos: Contact[] = [];
  load(){
    const contactsJson = jsonfile.readFileSync("./contacts.json");
    this.datos = contactsJson;
    };
  getAll(){
    return this.datos;
  }
  addOne(contact:Contact) {
    this.datos.push(contact);
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.datos);
  }
  getOneById(id){
    const aDevolver = this.datos.find((c)=> (c.id == id));
    return aDevolver;
  }
}


export { ContactsCollection };
