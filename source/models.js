"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsCollection = void 0;
// este import existe solo para que tsc lo tome y lo copie a /build
require("./contacts.json");
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
var Contact = /** @class */ (function () {
    function Contact() {
        this.id = 0;
        this.name = "";
    }
    return Contact;
}());
var ContactsCollection = /** @class */ (function () {
    function ContactsCollection() {
        this.data = [];
    }
    ContactsCollection.prototype.load = function () {
        var fs = require('fs');
        var data = fs.readFileSync('contacts.json', 'utf8');
        this.data = JSON.parse(data);
    };
    ContactsCollection.prototype.getAll = function () {
        return this.data;
    };
    ContactsCollection.prototype.addOne = function (contact) {
        var exist = this.data.some(function (c) { return c.id === contact.id; });
        if (!exist) {
            this.data.push(contact);
        }
        else {
            console.log("El contacto con id ".concat(contact.id, " ya existe"));
        }
    };
    ContactsCollection.prototype.save = function () {
        var fs = require('fs');
        fs.writeFileSync('contacts.json', JSON.stringify(this.data, null, 2));
    };
    ContactsCollection.prototype.getOneById = function (id) {
        return this.data.find(function (contact) { return contact.id === id; });
    };
    return ContactsCollection;
}());
exports.ContactsCollection = ContactsCollection;
