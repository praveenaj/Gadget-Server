var GadgetStore = GadgetStore || ( function() {
		var addGadgetToUser = function(page, gadgetArea, gadgetPath, gadgetName) {
			$.post("/portal/apis/store/gadgets/store.jag", {

				"action" : "addGadgetToUser",
				"page" : page,
				"gadgetArea" : gadgetArea,
				"gadgetPath" : gadgetPath,
				"gadgetName" : gadgetName
			}, function(result) {
				if (!result.error) {
					var btn = $('button[data-target=' + result.gadget + ']');
					var parent = btn.parent();
					parent.fadeOut(1000, function() {
						parent.empty().append("<div class='gadget-add-success'><i class='icon-ok'></i> Gadget added</div>").fadeIn(1000);
					});

				} else {
					alert(result.error + ":" + result.message);
				}
			}, "json");
		};

		var getGadgetToModal = function(gadgetPath, status) {
			$.post("/portal/apis/store/gadgets/store.jag", {
				"action" : "getGadgetToModal",
				"gadgetPath" : gadgetPath
			}, function(result) {

				// if this gadget is already in the user gadgets
				// show div .modal-gadget-status (by default it's hidden)
				// change CTA button to "Remove"
				//

				//TODO: have unobstrusive JS
				$('#modal-gadget-title').html(result["gadget"].name + "<small>By <a href='#'>" + result["gadget"].author + '</a>');
				$('#modal-gadget-desc').text(result["gadget"].description);
				if (status === "false") {
					$('.modal-btn-cont > .addGadget').show().attr('onClick', 'GadgetStore.addGadgetToUser(\'default\', \'main\', \'' + gadgetPath + '\', \'' + result["gadget"].name + '\')');
					$('.modal-gadget-status').hide();
					$('.modal-btn-cont > .gadget-add-success').hide();

				} else {
					$('.modal-btn-cont > .addGadget').hide();
					$('.modal-btn-cont > .gadget-add-success').show();
					$('.modal-gadget-status').show();

				}
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
