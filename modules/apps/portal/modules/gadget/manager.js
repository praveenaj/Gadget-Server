var getGadgets = function (path) {
    if (path == null) {
        path = Caramel.module("manager").constants.PORTAL_GADGETS_PATH;
    }

    var dataStore = Caramel.module("manager").getMetaDataStore();
    var gadgetsMeta = dataStore.get(path);

    var gadgets = [];

    for (var i = 0; i < gadgetsMeta.getChildren().length; i++) {
        var gadgetRegPath = gadgetsMeta.getChildren()[i];
        var metaGadget = dataStore.get(gadgetRegPath);
        var gadget = parse(metaGadget.content);
        gadget.path = gadgetRegPath;
        gadgets.push(gadget);
    }
    return gadgets;
};


var getGagdet = function (name) {

};

var saveGadget = function (gadget, path) {
    var dataStore = Caramel.module("manager").getMetaDataStore();
    var resource = dataStore.newResource();
    resource.content = stringify(that);
    dataStore.put(path + '/' + that.name, resource);
};

var renderGadget = function (gadget) {
    var mod = require('gadget');
    var rGadget = new mod.Gadget();
    rGadget.url = gadget.url;
    return rGadget.getHTML();
};

var gadgetUrlResolver = function (url) {

};






