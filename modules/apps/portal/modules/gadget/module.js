Caramel.module("gadget", {
    getGadgets:function () {
        return Caramel.require(Caramel.getModulesDir() + "gadget/manager.js").getGadgets.apply(this, arguments);
    },

    getGadget:function (name) {
        return Caramel.require(Caramel.getModulesDir() + "gadget/manager.js").getGadget.apply(this, arguments);
    },

    saveGadget:function (gadget, path) {
        return Caramel.require(Caramel.getModulesDir() + "gadget/manager.js").saveGadget.apply(this, arguments);
    },

    renderGadget:function (gadget) {
        return Caramel.require(Caramel.getModulesDir() + "gadget/manager.js").renderGadget.apply(this, arguments);
    }
});