var getGadgetsForDashboard = function (user, dashboardName, gadgetArea) {
    var userGadgetRepo = Caramel.module("manager").getUserGadgetsPath(user, dashboardName, gadgetArea);
    return Caramel.module("gadget").getGadgets(userGadgetRepo);
}