Caramel.block("layout/base", {

    getInputs:function () {
        var gadgetsMeta = Caramel.module("gadget").getGadgetsToStore();

        var gadgets = [];

        for (var gadget in gadgetsMeta) {
            var gadgetHtml = Caramel.module("gadget").renderGadget(gadget);
            gadgets.push(gadgetHtml);
        }
        return {
            gadgets:gadgets
        };
    },

    //The outputs of this block
    getOutputs:function (inputs) {
        return inputs;
    },

    getInputBlocks:function () {
        return ["side"];
    }

});
