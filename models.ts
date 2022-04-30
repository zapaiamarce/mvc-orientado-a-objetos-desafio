import * as jsonfile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data : Contact[] = []

  load(){
    this.data =this.data.concat(jsonfile.readFileSync("./contacts.json"))
  }

  getAll(){
    return this.data
  }

  getOneById(id){
    return this.getAll().find(x=>x.id == id)
  }

  //Hecho  
  addOne(contact){
    this.getAll().push(contact)
  }
  
  save(){
    //escribir todo el objeto interno en el archivo contacts json
    //escribirlo con jsonfile.writeFileSync
    const dataDelMomento = this.data
    return jsonfile.writeFileSync("./contacts.json",this.data)
    
  }
}


export { ContactsCollection,Contact };
