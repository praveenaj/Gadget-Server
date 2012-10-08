Caramel.module("dashboard", {

    getGadgetsForDashboard:function (name) {
        return Caramel.require(Caramel.getModulesDir() + "dashboard/dashboard.js").getGadgetsForDashboard.apply(this, arguments);
    }

});
