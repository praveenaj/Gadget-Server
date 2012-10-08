Caramel.module("manager", {

    constants:{
        "PORTAL_GADGETS_PATH":"/repository/portal/gadgets",
        "USERS_REPO":"/repository/portal/users/"
    },

    getAuthServerURL:function () {
        return Caramel.require(Caramel.getModulesDir() + "manager/manager.js").getAuthServerURL.apply(this, arguments);
    },

    getAuthenticator:function () {
        return Caramel.require(Caramel.getModulesDir() + "manager/manager.js").getAuthenticator.apply(this, arguments);
    },

    getRegistrationAgent:function () {
        return Caramel.require(Caramel.getModulesDir() + "manager/manager.js").getRegistrationAgent.apply(this, arguments);
    },

    getMetaDataStore:function () {
        return Caramel.require(Caramel.getModulesDir() + "manager/manager.js").getMetaDataStore.apply(this, arguments);
    },

    getUserGadgetsPath:function (){
        return Caramel.require(Caramel.getModulesDir() + "manager/manager.js").getUserGadgetsPath.apply(this, arguments);
    }


});