import * as jsonfile from 'jsonfile';
import * as lodash from "lodash"
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data : Contact[] = [];

  load(){
    let datos = jsonfile.readFileSync(__dirname + "/contacts.json")
    this.data = [...datos]
  }
  getAll(){
    return this.data
  }
  addOne(contacto:Contact){
    this.data = [...this.data,contacto]
  }
  save(){
    // Con esta funcion de lodash podemos verificar que no halla dos objetos con el mismo id
    let unicos = lodash.uniqBy(this.data,"id")
    jsonfile.writeFileSync(__dirname + "/contacts.json",unicos)
    this.load()
  }
  getOneById(id:number){
    let filtrado = this.data.filter(ele=>ele.id === id)
    return filtrado[0]
  }
}
export { ContactsCollection };
