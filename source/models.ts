/* este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {}
export { ContactsCollection };*/
// Este import es necesario para que TypeScript incluya el archivo contacts.json al compilar
import "./contacts.json";

// Importamos jsonfile para poder leer y escribir archivos JSON
import * as jsonfile from "jsonfile";

// Definimos una clase Contact con dos propiedades: id y name
class Contact {
  id: number = 0;
  name: string = "";
}

// Esta clase maneja una colección de contactos
class ContactsCollection {
  // Propiedad interna donde se guarda el array de contactos
  data: Contact[] = [];

  // Método que carga los datos desde contacts.json a la propiedad data
  load() {
    const json = jsonfile.readFileSync("./contacts.json"); // Lee el archivo JSON
    this.data = json; // Guarda el contenido en la propiedad data
  }

  // Retorna todos los contactos guardados en data
  getAll(): Contact[] {
    return this.data;
  }

  // Agrega un contacto nuevo al array data
  addOne(contact: Contact): void {
    this.data.push(contact);
  }

  // Guarda el contenido actual de data en contacts.json
  save(): void {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  // Busca un contacto por ID y lo devuelve
  getOneById(id: number): Contact | undefined {
    const encontrado = this.data.find((contacto) => contacto.id == id);
    return encontrado;
  }
}

// Exportamos la clase para poder usarla en otros archivos
export { Contact, ContactsCollection };

