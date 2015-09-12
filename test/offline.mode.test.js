define([
    "offline",
    "contactsCollection"
], function (Offline, ContactsCollection) {
    
    describe("Offline Module", function () {
        var offline;

        beforeEach(function () {
            this.offline = new Offline();
            offline = this.offline;
        });

        it("should have methods defined", function () {
            expect(offline.setData).toBeDefined();
            expect(offline.loadData).toBeDefined();
            expect(offline.saveItem).toBeDefined();
            expect(offline.deleteItem).toBeDefined();
            expect(offline.editItem).toBeDefined();
            expect(offline.getByType).toBeDefined();

        });
        it("should call the methods", function () {
            spyOn(offline, "setData");
            spyOn(offline, "loadData");
            spyOn(offline, "saveItem");
            spyOn(offline, "deleteItem");
            spyOn(offline, "editItem");
            spyOn(offline, "getByType");

            offline.setData();
            offline.loadData();
            offline.saveItem();
            offline.saveItem();
            offline.editItem();
            offline.deleteItem();
            offline.getByType();

            expect(offline.setData).toHaveBeenCalled();
            expect(offline.loadData).toHaveBeenCalled();
            expect(offline.saveItem).toHaveBeenCalled();
            expect(offline.deleteItem).toHaveBeenCalled();
            expect(offline.editItem).toHaveBeenCalled();
            expect(offline.getByType).toHaveBeenCalled();
        });
        
        describe("methods", function () {
            var data, ls = localStorage;

            beforeEach(function () {
                mockData = '[{"id":"3","name":"Contact 2","address":"1, a street, a town, a city, AB12 3CD","tel":"123456789","type":"family","email":"anemail@me.com"},{"id":"4","name":"Contact 4","address":"1, a street, a town, a city, AB12 3CD","tel":"123456789","type":"colleagues","email":"anemail@me.com"},{"id":"5","name":"Contact 5","address":"1, a street, a town, a city, AB12 3CD","tel":"123456789","type":"friends","email":"anemail@me.com"},{"id":"6","name":"asd","address":"asd","tel":"sad","type":"bla","email":"asd"}]';
            });
            
            afterEach(function () {
                //ls.removeItem("contacts");
            });

            describe("#setData", function () {
                it("should set item with data", function () {
                    spyOn(offline, "setData");
                    offline.setData(mockData);
                    expect(offline.setData).toHaveBeenCalledWith(mockData);
                });
                it("should return error if no data is sent", function () {
                    expect(offline.setData()).toEqual("Please add data");
                });
            });

            describe("#loadData", function () {
                describe("should return", function () {
                    it("message if no data is set", function () {
                        ls.removeItem("contacts");
                        expect(offline.loadData()).toEqual("No data Found");
                    });
                    it("object if data is set", function () {
                        ls.setItem("contacts", mockData);
                        expect(offline.loadData()).toEqual(jasmine.any(Object));
                    });
                });
            });

            describe("#saveItem", function () {
                it("should return string if no data is sent", function () {
                    expect(offline.saveItem()).toBe("Please fill the form");
                });
            });

            describe("#editItem", function () {
               console.log("edit item test"); 
            });

            describe("#deleteItem", function () {
            });

            describe("#getByType", function () {
                it("should return data by type", function () {
                    expect(offline.getByType("family")).toEqual(jasmine.any(Object));
                });

                it("should return false if no type is sent", function () {
                    expect(offline.getByType()).toBe(false); 
                });
            });
        });
    });
});
