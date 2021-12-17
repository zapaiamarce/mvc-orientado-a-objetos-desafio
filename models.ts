import * as jsonfile from "jsonfile";

class Contact {
	id: number;
	name: string;
}

class ContactsCollection {
	// Destinado a almacenar los datos de tipo Contact provenientes de un archivo .json
	arrData: Contact[] = [];

	// Carga los datos del archivo contacts.json y los almacena en "arrData"
	load() {
		this.arrData = jsonfile.readFileSync(__dirname + "/contacts.json");
	}

	// Devuelve todos los datos almacenados en "arrData".
	getAll() {
		return this.arrData;
	}

	// Agrega un contacto a "arrData", ya sea que esté vacío o contenga datos del archivo .json
	addOne(contact: Contact) {
		this.arrData.push(contact);
	}

	// Sobreescribe el archivo contacts.json con los cambios almacenados en "arrData"
	save() {
		jsonfile.writeFileSync("./contacts.json", this.arrData);
	}

	// Devuelve el contacto que haga match con el id pasado como argumento.
	getOneById(id: number) {
		const contactoPorId = this.arrData.find((contact) => contact.id == id);
		return contactoPorId;
	}
}

export { ContactsCollection };
