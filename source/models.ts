import * as jsonfile from "jsonfile";
import * as path from "path";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  private filePath = path.resolve(__dirname, "../source/contacts.json");

  load() {
    try {
      const json = jsonfile.readFileSync(this.filePath);
      this.data = json;
    } catch (error) {
      console.error("Error loading contacts:");
      this.data = [];
    }
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    try {
      jsonfile.writeFileSync(this.filePath, this.data, { spaces: 2 });
    } catch (error) {
      console.error("Error saving contacts:");
    }
  }

  getOneById(id: number): Contact | undefined {
    return this.data.find((contact) => contact.id === id);
  }

  getOneByName(name: string): Contact | undefined {
    return this.data.find((contact) => contact.name === name);
  }
}

export { ContactsCollection, Contact };
