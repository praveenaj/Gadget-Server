var getGadgetsToStore = function () {
    return Caramel.module("gadget").getGadgets();

};

var addGadgetToUser = function (page, gadgetArea, gadgetPath, gadgetName) {

    var user = Caramel.getUser();

    /*var path = Caramel.module("manager").getUserGadgetsPath(user, page, gadgetArea)
     + "/" + gadgetName + "-link";*/
    var path = Caramel.module("manager").getUserGadgetsPath(user, page, gadgetArea);

    var dataStore = Caramel.module("manager").getMetaDataStore();

    if (!dataStore.resourceExists(path)) {
        dataStore.put(path, dataStore.newCollection());
    }

    dataStore.createLink(path + "/" + gadgetName, gadgetPath);
    //dataStore.createLink("/test", gadgetPath);

    var created = dataStore.resourceExists(path);

    return created;

};


var getGadgetToModal = function (gadgetName) {
    return Caramel.module("gadget").getGadget(gadgetName);
}
