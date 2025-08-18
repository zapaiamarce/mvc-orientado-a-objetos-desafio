// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// Si no estuviera este import, TypeScript no se da cuenta que lo necesitamos
// ya que para escribir o leer el archivo usamos la librería "jsonfile"
import jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  private data: Contact[] = [];

  async load(): Promise<void> {
    try {
      this.data = await jsonfile.readFile(__dirname + "/contacts.json");
    } catch (error) {
      console.error("Error al cargar contactos:", error);
      this.data = [];
    }
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact: Contact): void {
    this.data.push(contact);
  }

  async save(): Promise<void> {
    try {
      await jsonfile.writeFile(__dirname + "/contacts.json", this.data, {
        spaces: 2,
      });
    } catch (error) {
      console.error("Error al guardar contactos:", error);
    }
  }

  getOneById(id: number): Contact | undefined {
    return this.data.find((contact) => contact.id === id);
  }
}

export { ContactsCollection };
