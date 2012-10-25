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

		var getGadgetToModal = function(page, gadgetArea, gadgetPath, gadgetName, status) {
			$.post("/portal/apis/store/gadgets/store.jag", {
				"action" : "getGadgetToModal",
				"gadgetName" : gadgetName
			}, function(result) {
				
				// if this gadget is already in the user gadgets
					// show div .modal-gadget-status (by default it's hidden)
					// change CTA button to "Remove"
				// 
				$('#addGadget').attr('onClick', 'GadgetStore.addGadgetToUser(\'default\', \'main\', \'' + gadgetPath + '\', \'' + gadgetName + '\')'); 
				$('#modal-gadget-title').html(result["gadget"].name + "<small>By <a href='#'>" + result["gadget"].author + '</a>');
				$('#modal-gadget-desc').text(result["gadget"].description);
				$('#addGadget2').text(status);
				console.log(result["gadget"]);
			}, "json");

		};

		var searchGadget = function(query) {
			$.post("/portal/apis/store/gadgets/store.jag", {
				"action" : "search",
				"query" : query
			}, function(result) {
				// ELSE put <li>..</li> into a separate .mu file and load,compile
				//var source = $('.img-rounded').html();
				
				//var template = Handlebars.compile(source);
				//console.log(template);
				
				//var output = template(result);

			}, "json");

		};

		return {
			addGadgetToUser : addGadgetToUser,
			getGadgetToModal : getGadgetToModal,
			searchGadget : searchGadget
		};
	}());
