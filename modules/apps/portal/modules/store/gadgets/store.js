var getGadgetsToStore = function() {

	var gadgetsList = Caramel.module("gadget").getGadgets();

	for (var key in gadgetsList) {

		if (isGadgetAdded(gadgetsList[key].name)) {
			//TODO: get names of pages having this gadget
			gadgetsList[key].added = true;
		} else {
			gadgetsList[key].added = false;
		}

	}
	return gadgetsList;
};

var getGadget = function(name) {
    var gadget = Caramel.module("gadget").getGadgets(
        Caramel.module("manager").constants.PORTAL_GADGETS_PATH + "/" + name);
    gadget.added = isGadgetAdded(gadget.name);
    return gadget;
};

// TODO: implement a mechanism to run SQL like queries in the backend
// without getting a JSON object that contains everything and
// filtering it out.
var isGadgetAdded = function(gadgetName) {

	var log = new Log();

	var user = Caramel.getUser();

	var path = Caramel.module("manager").getUserGadgetsPath(user, "default", "main") + "/" + gadgetName;

	var dataStore = Caramel.module("manager").getMetaDataStore();

	var result = dataStore.resourceExists(path);

	return result;
}
var addGadgetToUser = function(page, gadgetArea, gadgetPath, gadgetName) {

	var log = new Log();

	var user = Caramel.getUser();

	/*var path = Caramel.module("manager").getUserGadgetsPath(user, page, gadgetArea)
	 + "/" + gadgetName + "-link";*/
	var path = Caramel.module("manager").getUserGadgetsPath(user, page, gadgetArea);

	var dataStore = Caramel.module("manager").getMetaDataStore();

	var newGadgetPath = path + "/" + gadgetName;

	log.info(newGadgetPath);

	if (!dataStore.resourceExists(newGadgetPath)) {
		if (!dataStore.resourceExists(path)) {
			dataStore.put(path, dataStore.newCollection());
		}
		dataStore.createLink(newGadgetPath, gadgetPath);

		var created = dataStore.resourceExists(path);

		return created;

		// TODO: verify deletion.
	} else {//remove gadget from user

		log.info("Delete Gadget");
		//dataStore.del(path);
		return true;
	}

};

var getGadgetToModal = function(gadgetPath) {
	return Caramel.module("gadget").getGadgets(gadgetPath);
}
var searchGadget = function(query) {
	//console.log(query);
	// return Caramel.module("gadget").search(query);
	// search for gadget name + gadget descriptions
	// rank results
	// include pagination
}
