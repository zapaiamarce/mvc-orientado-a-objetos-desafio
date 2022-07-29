import * as jsonfile from "jsonfile";
class Contact {
	id: number;
	name: string;
}

class ContactsCollection {
	listaDedata: Contact[] = [];

	load() {
		const json = jsonfile.readFileSync("./contacts.json");
		this.listaDedata = json;
	}
	getAll() {
		return this.listaDedata;
	}
	addOne(contact: Contact) {
		this.listaDedata.push(contact);
	}
	save() {
		jsonfile.writeFileSync("./contacts.json", this.listaDedata);
	}
	getOneById(id) {
		const listaDeDatos = this.listaDedata;
		const encontrado = listaDeDatos.find((contacto) => {
			if (contacto.id == id) {
				return true;
			}
		});
		return encontrado;
	}
}

export { ContactsCollection };

// terminar si o si el desafio sino mirarlo, ya  que voy a tene que reptirlo varias veces
