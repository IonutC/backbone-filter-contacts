define([
    "backbone",
    "contactsModel"
], function (Backbone, ContactsModel) {
    "use strict";

    var ContactsCollection = Backbone.Collection.extend({
        model: ContactsModel,
        urlRoot: "./application/contacts.php",
        url: function () {
            //define the collection url
            var base = this.urlRoot || (this.collection && this.collection.url) || "/";
            return base;
        },
        initialize: function () {

        },
    });

    return ContactsCollection;

});
