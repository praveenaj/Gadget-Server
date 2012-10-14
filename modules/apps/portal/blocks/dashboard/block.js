Caramel.block("dashboard", {

    getInputs:function () {
        return {};
    },

    //The outputs of this block
    getOutputs:function (inputs) {
        var gadgetsMeta = Caramel.module("dashboard").getGadgetsForDashboard(Caramel.getUser(), inputs.dashName, inputs.gadgetArea);
        log.info(gadgetsMeta.length);
        var gadgets = [];

        for (var gadget in gadgetsMeta) {
            var gadgetHtml = Caramel.module("gadget").renderGadget(gadgetsMeta[gadget]);
            gadgets.push(gadgetHtml);
        }
        return {
            gadgets:gadgets
        };
    }

});
