Caramel.module("dashboard", {

    getGadgetsForDashboard:function (name) {
        return Caramel.require(Caramel.getModulesDir() + "dashboard/dashboard.js").getGadgetsForDashboard.apply(this, arguments);
    },
      listGadgetsForDashboard:function (name) {
        return Caramel.require(Caramel.getModulesDir() + "dashboard/dashboard.js").listGadgetsForDashboard.apply(this, arguments);
    }

});
