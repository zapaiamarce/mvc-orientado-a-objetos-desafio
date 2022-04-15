import * as jsonfile from "jsonfile"


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  arrayData: Contact [] = []  //hay que darle un valor vacio, ya que load no esta en el constructor, y si alguien usa otro metodo daria error.    

  load (){
    //leer contacs.json y guardarlo en data
    const json = jsonfile.readFileSync("./contacts.json")
    this.arrayData = json
    
  }

  getAll(){
    //devuelve collection completa
    return this.arrayData
  }

  addOne(contact : Contact) {
    //agrega un contacto a la lista 
    const contactoAagregar = contact
    this.arrayData.push(contactoAagregar)
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.arrayData)
  }
  getOneById ( id : number) {
    //devuelve el contacto que tenga el id

    const idABuscar = id
    const contactoEncontrado = this.arrayData.find((contacto) => { if (contacto.id == idABuscar) {return true}})
    return contactoEncontrado
  }
}
export { ContactsCollection };
