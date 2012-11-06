var getGadgetsForDashboard = function (user, dashboardName, gadgetArea) {
    var userGadgetRepo = Caramel.module("manager").getUserGadgetsPath(user, dashboardName, gadgetArea);
    return Caramel.module("gadget").getGadgets(userGadgetRepo);
}

var listGadgetsForDashboard = function (user, dashboardName, gadgetArea) {
    var userGadgetRepo = Caramel.module("manager").getUserGadgetsPath(user, dashboardName, gadgetArea);
    var result = Caramel.module("gadget").getGadgets(userGadgetRepo);   
    var gadgeturls = [];

	for (var i = 0; i < result.length; i++) {		
		gadgeturls.push(result[i].url);
	} 
    
    return {
         gadgeturls:gadgeturls
        };
        
    
}