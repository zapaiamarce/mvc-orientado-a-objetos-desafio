import "c:/Users/alvar/Desktop/apx-folder/mod1/mvc-orientado-a-objetos-desafio/intento2/mvc-orientado-a-objetos-desafio/source/contacts.json"
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("c:/Users/alvar/Desktop/apx-folder/mod1/mvc-orientado-a-objetos-desafio/intento2/mvc-orientado-a-objetos-desafio/source/contacts.json");
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("c:/Users/alvar/Desktop/apx-folder/mod1/mvc-orientado-a-objetos-desafio/intento2/mvc-orientado-a-objetos-desafio/source/contacts.json", this.data);
  }
  getOneById(id: number) {
    const finded = this.data.find((c) => {
      return c.id == id;
    });
    return finded;
  }
}

export { ContactsCollection, Contact };
