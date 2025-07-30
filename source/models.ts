// este import existe solo para que tsc lo tome y lo copie a /build
require("./contacts.json");
const fs = require("fs"); // Importamos fs
const path = require("path"); // Importamos el path
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
	id: number = 0;
	name: string = "";
}

class ContactsCollection { // Creamos la clase ContactsCollection
  private data: any[] = []; // Inicializamos data de tipo array y lo empezamos vacio

  load(){ // Creamos el metodo load

    const filePath = path.join(__dirname, "./contacts.json"); // Guardamos la direccion en la variable filePath

    if (!fs.existsSync(filePath)) { // Si retorna false
      throw new Error("El archivo contacts.json no existe."); // Mostramos un error
    }

    const obtenerData = fs.readFileSync(filePath, 'utf-8'); // Obtenemos la data con fs leyendo la ruta de filePath con utf-8
    
    this.data = JSON.parse(obtenerData); // E igualamos this.data al parse del JSON (obtenerData)
  }

  getAll(){ // Creamos el metodo que retorna todo el array de objetos
    return this.data; // Y retornamos this.data
  }
  
  addOne(contact: Contact){ // Creamos el metodo que permite agregar contactos de tipo Contact
    this.data.push(contact); // Pusheamos el objeto al array
    return this.data; // Y retornamos el nuevo objeto
  }

  save(){ // Creamos el metodo save para guardar en el JSON los objetos agregados
    const dataToSave = JSON.stringify(this.data, null, 2); // Guardamos en la variable dataToSave la conversion de this.data, con valores null a reemplazar y con una identacion de 2 en el JSON
    const filePath = path.join(__dirname, "contacts.json"); // Aseguramos que la ruta sea correcta
    fs.writeFileSync(filePath, dataToSave, 'utf-8'); // Y usamos el metodo writeFileSync para guardar en './contacts.json', la dataToSave, en formato utf-8
  }

  getOneById(id: number){ // Creamos el metodo getOneById que recibe un id de tipo number
    return this.data.find(e => e.id === id) || null; // Retornamos el id buscado con un find. En caso contrario, se retorna null
  }
}

export { ContactsCollection };