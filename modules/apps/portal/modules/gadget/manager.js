var getGadgets = function (path) {
    var dataStore, gadgetsMeta, gadgets;

    if (path == null) {
        path = Caramel.module("manager").constants.PORTAL_GADGETS_PATH;
    }

    dataStore = Caramel.module("manager").getMetaDataStore();
    try {
        gadgetsMeta = dataStore.get(path);
    } catch(e) {
        if(log.isDebug){
            log.error(e.message + ": " + path);
        }
    }

    gadgets = [];

    if(gadgetsMeta != null) {
        for (var i = 0; i < gadgetsMeta.getChildren().length; i++) {
            var gadgetRegPath = gadgetsMeta.getChildren()[i];
            var metaGadget = dataStore.get(gadgetRegPath);
            var gadget = parse(metaGadget.content);
            gadget.path = gadgetRegPath;
            gadgets.push(gadget);
        }
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
    rGadget.parent = 'http://localhost:9763/portal/dashboard.jag';
    return rGadget.getHTML();
};

var gadgetUrlResolver = function (url) {

};






