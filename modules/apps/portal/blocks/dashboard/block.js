Caramel.block("dashboard", {

	getInputs : function() {
		return {};
	},

	//The outputs of this block
	getOutputs : function(inputs) {
		var gadgetsMeta = Caramel.module("dashboard").getGadgetsForDashboard(Caramel.getUser(), inputs.dashName, inputs.gadgetArea);
		//log.info(gadgetsMeta.length);
		var gadgets = [];

		for (var gadget in gadgetsMeta) {

			// TODO: load positions from registry
			var gadgetHtml = Caramel.module("gadget").renderGadget(gadgetsMeta[gadget]);
			var tmp = parseInt(gadget) +1;
			var col =  ( tmp % 3 ) ? tmp%3 : 3;
			var g = {
				content : gadgetHtml,
				col : col,
				row : 1
			};

			gadgets.push(g);
		}
		return {
			gadgets : gadgets
		};
	}
});
