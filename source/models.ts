// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  public data: Contact[] = [];

  public load(): void {
    const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = fileContent;
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact: Contact): void {
    this.data.push(contact);
  }

  save(): void {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }

  getOneById(id: number): Contact | undefined {
    return this.data.find((contact) => contact.id === id);
  }
}
export { ContactsCollection };
