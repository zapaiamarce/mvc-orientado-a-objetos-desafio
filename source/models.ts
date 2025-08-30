// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  guardarData: Contact[] = [];

  load() {
    try {
      this.guardarData = jsonfile.readFileSync(__dirname + '/contacts.json');
      
      // Verificamos si la data está vacía
      if (!this.guardarData || this.guardarData.length === 0) {
        console.warn('El archivo está vacío, inicializando con un array vacío.');
        this.guardarData = []; // Inicializamos con un array vacío
      }
    } catch (err) {
      console.error('Error al cargar los contactos:', err);
      this.guardarData = []; // Inicializamos con un array vacío en caso de error
    }
  }

  getAll() {
    return this.guardarData;
  }

  addOne(contact: Contact) {
    this.guardarData.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.guardarData)
  }

  getOneById(id: number) {
    const numeroDeContacto = this.guardarData.find(contacto => {
      return contacto.id === id;
    })
    return numeroDeContacto;
  }
}
export { ContactsCollection };
