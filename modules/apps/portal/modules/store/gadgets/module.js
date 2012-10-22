Caramel.module("store/gadgets", {

    getGadgetsToStore:function () {
        return Caramel.require(Caramel.getModulesDir() + "store/gadgets/store.js").getGadgetsToStore.apply(this, arguments);
    },

    addGadgetToUser:function () {
        return Caramel.require(Caramel.getModulesDir() + "store/gadgets/store.js").addGadgetToUser.apply(this, arguments);
    },
    
    getGadgetToModal:function(){
    	return Caramel.require(Caramel.getModulesDir() + "store/gadgets/store.js").getGadgetToModal.apply(this,arguments);
    }

});