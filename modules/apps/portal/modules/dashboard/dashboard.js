var getGadgetsForDashboard = function (user, dashboardName, gadgetArea) {
    var userGadgetRepo = Caramel.module("manager").getUserGadgetsPath(user, dashboardName, gadgetArea);
    return Caramel.module("gadget").getGadgets(userGadgetRepo);
}

var listGadgetsForDashboard = function (user, dashboardName, gadgetArea) {
    var userGadgetRepo = Caramel.module("manager").getUserGadgetsPath(user, dashboardName, gadgetArea);
    var result = Caramel.module("gadget").getGadgets(userGadgetRepo);   
    var gadgeturls = [];

var log = new Log();
log.info(result);
if(result == null){
	
	return {
        error:true,
        message:'Emtpy gadget url list returnfrom dashboard'
        };
        
}else if(result.length == 0){
	
	return {
        error:true,
        message:'There is no gadget in dashboard'
        };
        
}else{
	for (var i = 0; i < result.length; i++) {	
		log.info("gooooo"+result[i].url);
		gadgeturls.push(result[i].url);
	} 
    
    return {
         gadgeturls:gadgeturls
        };
        
   }
}