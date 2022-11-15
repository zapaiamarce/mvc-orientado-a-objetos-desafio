import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayConLaData: Contact[] = [];

  load() {
    const archivoJson = jsonfile.readFileSync(__dirname + "/contacts.json");

    this.arrayConLaData = archivoJson;
  }

  getAll() {
    return this.arrayConLaData;
  }

  addOne(contact: Contact) {
    return this.arrayConLaData.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.arrayConLaData);
  }
  getOneById(id: number) {
    const numeroBuscadoConId = this.arrayConLaData.find((p) => {
      return p.id == id;
    });
    return numeroBuscadoConId;
  }
}

export { ContactsCollection, Contact };
