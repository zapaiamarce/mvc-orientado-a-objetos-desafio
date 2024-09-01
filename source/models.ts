// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as fs from "fs"; 
import * as jsonfile from "jsonfile"
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data : Contact [] = []
  //constructor(data : Contact []) {
  //  this.data = data

  //}
  load() {
    //const datosBuffer = fs.readFileSync("./contacts.json")
    //const datosString = datosBuffer.toString()
    this.data =  jsonfile.readFileSync("./contacts.json")//JSON.parse(datosString);
  }
  getAll() {
    return this.data
  }
  addOne(contact: Contact) {
    this.data.push(contact);
    return this.data
  } 
  save() {
    const dataParaElJson = JSON.stringify(this.data)
    fs.writeFileSync ("./contacts.json", dataParaElJson)
  }
  getOneById(id: number) {
    return this.data.find((obj) => obj.id === id)
  }
  }

export { ContactsCollection };
