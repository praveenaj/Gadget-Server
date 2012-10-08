var getGadgetsToStore = function () {
    return Caramel.module("gadget").getGadgets();

};

var addGadgetToUser= function (page, gadgetArea, gadgetPath, gadgetName) {

    var user = Caramel.getUser();

    var path = Caramel.module("manager").getUserGadgetsPath(user, page, gadgetArea)
        + "/" + gadgetName;

    var dataStore = Caramel.module("manager").getMetaDataStore();
    dataStore.createLink(path, gadgetPath);

    var created = dataStore.resourceExists(path);

    return created;

};


