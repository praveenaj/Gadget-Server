Caramel.block("store/gadgets", {

	getInputs : function() {
		var gadgetsMeta = Caramel.module("store/gadgets").getGadgetsToStore();
		return {
			gadgets : gadgetsMeta
		};
	},

	//The outputs of this block
	getOutputs : function(inputs) {
		return inputs;
	}
});
