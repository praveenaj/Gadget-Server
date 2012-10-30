var getAuthServerURL = function() {
	return Caramel.getSiteConf().authServerUrl;
};

var getAuthenticator = function() {
	var gs = require('gs');
	return new gs.CarbonAuth();
};

var getRegistrationAgent = function() {
	var gs = require('gs');
	return new gs.UserReg();
};

var getMetaDataStore = function() {
	var metaDataStore = session.get('metaDataStore');
	if (metaDataStore == null) {
		metaDataStore = new MetadataStore("admin", "admin");
		session.put('metaDataStore', metaDataStore);
	}
	return metaDataStore;
};

var getUserGadgetsPath = function(user, dashboardName, gadgetArea) {

	var userGadgetRepo = Caramel.module("manager").constants.USERS_REPO + user.username;

	userGadgetRepo = (dashboardName != undefined) ? userGadgetRepo + "/pages/" + dashboardName : userGadgetRepo;

	userGadgetRepo = (gadgetArea != undefined) ? userGadgetRepo + "/gadgetAreas/" + gadgetArea + "/gadgets" : userGadgetRepo;
	
	return userGadgetRepo;
}

