Caramel.initializer("store/gadgets", {
	preInitialize : function(data) {
		Caramel.addHeaderJS("store/gadgets", "storejs", "templates/store/gadgets/js/gadget_store.js");
		Caramel.addHeaderJS("store/gadgets", "assemblyjs", "templates/store/gadgets/js/assembly.js");
	}
});
