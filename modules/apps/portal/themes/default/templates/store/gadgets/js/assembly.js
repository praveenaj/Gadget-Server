$(function() {
	$('.store-gadget-title').click(function() {
		//TODO: show spinning wheel
		$('.modal-gadget').modal( show = true, backdrop = false);
		var gadgetPath = $(this).attr('data-path');
		var status = $(this).attr('data-status');
		GadgetStore.getGadgetToModal(gadgetPath,status);
	});

	$('.link-add-gadget-location').click(function() {
		$('.modal-add-gadget-location').modal( show = true, backdrop = false);
	});

	$('#btn-gadget-search').click(function() {
		var query = $('#search').val();
		GadgetStore.searchGadget(query);

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
