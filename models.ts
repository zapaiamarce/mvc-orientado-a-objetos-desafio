import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() { 
    var resultado = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = resultado;
  };
  getAll() { 
   return this.data;
  };
  addOne(contact) { 
    this.data.push(contact);
  }
  save() { 
  jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);

  };
  getOneById(id) { 
    return this.data.find(i => i.id == id);
  }
}
export { ContactsCollection };
