"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
var models_1 = require("./models");
var contacts = [];
var ContactsController = /** @class */ (function () {
    function ContactsController() {
        this.contacts = new models_1.ContactsCollection();
        this.contacts.load();
    }
    ContactsController.prototype.processOptions = function (options) {
        var action = options.action, params = options.params;
        if (action === "get") {
            if (params && params.id) {
                return this.contacts.getOneById(params.id);
            }
            else {
                return this.contacts.getAll();
            }
        }
        else if (action === "save") {
            this.contacts.addOne(params);
            this.contacts.save();
        }
    };
    return ContactsController;
}());
exports.ContactsController = ContactsController;
