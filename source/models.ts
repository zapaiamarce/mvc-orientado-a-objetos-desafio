import * as fs from 'fs';
import * as jsonfile from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactsArray: Contact[];
  constructor() {
    this.contactsArray = []
  }
  load() {
    const contactsFileContent = fs.readFileSync(__dirname + '/contacts.json');
    const contactsFileContentString = contactsFileContent.toString();
    const contactsFileContentJSON = JSON.parse(contactsFileContentString);
    // las tres líneas anteriores podrían ser algo como...
    // contactsFileContent = JSON.parse(fs.readFileSync('contacts.json').toString()) y luego asignarle a this.contactsArray la constante contactsFileContent.
    this.contactsArray = contactsFileContentJSON;
  }

  getAll():Contact[] {
    return this.contactsArray;
  }

  addOne(contact:Contact) {
    this.contactsArray.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + '/contacts.json',this.contactsArray);
  }

  getOneById(id:number) {
    // ver cómo manejo si no existe el contacto...
    const searchedContact = this.contactsArray.find(contact => contact.id === id);
    if (searchedContact) return searchedContact; else return this.getAll();
  }
}
export { ContactsCollection };
