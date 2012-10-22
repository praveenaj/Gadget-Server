var GadgetStore = GadgetStore || ( function() {
		var addGadgetToUser = function(page, gadgetArea, gadgetPath, gadgetName) {
			$.post("/portal/apis/store/gadgets/store.jag", {
				"action" : "addGadgetToUser",
				"page" : page,
				"gadgetArea" : gadgetArea,
				"gadgetPath" : gadgetPath,
				"gadgetName" : gadgetName
			}, function(result) {
				console.log(result)
			}, "json");
		};

		var getGadgetToModal = function(gadgetName) {
			$.post("/portal/apis/store/gadgets/store.jag", {
				"action" : "getGadgetToModal",
				"gadgetName" : gadgetName
			}, function(result) {
				$('#modal-gadget-title').html(result["gadget"].name + "<small>By " + result["gadget"].author);
				$('#modal-gadget-desc').text(result["gadget"].description);
				console.log(result["gadget"]);
			}, "json");

		};

		return {
			addGadgetToUser : addGadgetToUser,
			getGadgetToModal : getGadgetToModal
		};
	}());
