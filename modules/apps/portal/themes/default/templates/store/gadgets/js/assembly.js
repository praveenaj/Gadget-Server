$(function() {
	$('a[data-toggle=modal]').click(function() {
		//TODO: show spinning wheel		
		$('#modal-gadget').modal(show=true,backdrop=false);
		var name = $(this).attr('id');
		GadgetStore.getGadgetToModal(name);
	});
}); 