var getGadgets = function(path) {

	var dataStore, gadgetsMeta;

	dataStore = Caramel.module("manager").getMetaDataStore();

	if (path == null) {// get all gadgets
		path = Caramel.module("manager").constants.PORTAL_GADGETS_PATH;

	}

	try {
		gadgetsMeta = dataStore.get(path);
	} catch(e) {
		if (log.isDebug) {
			log.error(e.message + ": " + path);
		}
	}

	if (gadgetsMeta != null) {

		//if multiple gadgets are requested
		if (typeof(gadgetsMeta.getChildren) != 'undefined') { 

			var gadgets = [];

			for (var i = 0; i < gadgetsMeta.getChildren().length; i++) {
				var gadgetRegPath = gadgetsMeta.getChildren()[i];
				var metaGadget = dataStore.get(gadgetRegPath);
				var gadget = parse(metaGadget.content);
				log.info("meta gadget url "+metaGadget.content.url);
				gadget.path = gadgetRegPath;
				gadgets.push(gadget);
			}

			return gadgets;
			
		} else { // if a single gadget is requested
			var gadget = parse(gadgetsMeta.content);
			return gadget;
		}

	}

};

var getGadgetURLs = function(path) {

	var dataStore, gadgetsMeta;

	dataStore = Caramel.module("manager").getMetaDataStore();

	if (path == null) {// get all gadgets
		path = Caramel.module("manager").constants.PORTAL_GADGETS_PATH;
	}

	try {
		gadgetsMeta = dataStore.get(path);
	} catch(e) {
		if (log.isDebug) {
			log.error(e.message + ": " + path);
		}
	}

	if (gadgetsMeta != null) {

		//if multiple gadgets urls are requested
		if (typeof(gadgetsMeta.getChildren) != 'undefined') { 

			var gadgeturls = [];

			for (var i = 0; i < gadgetsMeta.getChildren().length; i++) {
				var gadgetRegPath = gadgetsMeta.getChildren()[i];
				var metaGadget = dataStore.get(gadgetRegPath);
				gadgeturls.push(metaGadget.getProperty("url"));
			}

			return gadgeturls;
			
		} else { // if a single gadget url is requested
			var gadgeturl = metaGadget.getProperty("url");
			return gadgeturl;
		}

	}

};

/*var saveGadget = function(gadget, path) {

 var dataStore = Caramel.module("manager").getMetaDataStore();
 var resource = dataStore.newResource();
 resource.content = stringify(that);
 dataStore.put(path + '/' + that.name, resource);
 };*/

var renderGadget = function(gadget) {
	var mod = require('gadget');
	var rGadget = new mod.Gadget();
	//rGadget.shindigBaseUrl = 'http://192.168.1.3:9763/gadgets/ifr';
	rGadget.url = gadget.url;
	rGadget.parent = 'http://localhost:9763/portal/dashboard.jag';
	return rGadget.getHTML();
};

var gadgetUrlResolver = function(url) {

};

