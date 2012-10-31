$(function() {
	$('.store-gadget-title').click(function() {
		//TODO: show spinning wheel
		$('.modal-gadget').modal( show = true, backdrop = false);
		var gadgetPath = $(this).attr('data-path');
		var status = $(this).attr('data-status');
		GadgetStore.getGadgetToModal(gadgetPath, status);
	});

	$('.link-add-gadget-location').click(function() {
		$('.modal-add-gadget-location').modal( show = true, backdrop = false);
	});

	$('#btn-gadget-search').click(function() {
		var query = $('#search').val();
		GadgetStore.searchGadget(query);

	});

	$('.addGadget').click(function() {
		var path = $(this).attr("data-path");
	
		var gadgetName = $(this).data("target");
		var page = 'default';
		var gadgetArea = 'main';
		GadgetStore.addGadgetToUser('' + page + '', '' + gadgetArea + '', '' + path + '', '' + gadgetName + '');
		/*
		$(this).fadeOut(1000, function() {
			var cls = $('<div/>', {
				'style' : 'right:10px;top:15px;width:12px;height:18px;cursor:pointer;padding:2px;position:absolute;border:solid gray 1px;',
				'id' : 'cls',
				'text' : 'Gadget added to ' + page,
				'title' : 'Close'
			});
			$(this).html(cls).fadeIn(1000);
		});
		*/

	});
	
	$('.modal-btn-cont > .addGadget').click(function(){
		$(this).fadeOut(1000, function(){
			$('.gadget-add-success').fadeIn(1000).html("<div class='gadget-add-success'><i class='icon-ok'></i> Gadget added</div>");
		});
	});

	$('.nav-tabs a:first').tab('show');

	// load additional reviews when
	// scrolled to bottom of the list
	$('#ul-reviews').scroll(function() {

		if ($(this).scrollTop() + $(this).height() >= $(this).prop("scrollHeight")) {
			if ($(this).attr('data-loading') != 'true') {
				$(this).append('<li class="reviews-loading"><img src="http://localhost:9763/portal/themes/default/img/ajax-loader.gif">Loading more reviews...</li>');

				// load the rest of the reviews

				// remove 'reviews-loading' when load complete
				// $(this).remove('reviews-loading');

				$(this).attr('data-loading', 'true');
			}
		}
	});

	// script to load more reviews as user scrolls down the <ul>

});
