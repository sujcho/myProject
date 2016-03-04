$('#btn-see-my-products').on( "click", function() {
		$('#see-my-products').collapse();
		$('#btn-see-my-products').hide();
		$('#btn-edit-my-products').hide();
});
$('#btn-show-my-showcase').on( "click", function() {
		$('show-my-showcase').collapse();
		$('#btn-see-my-products').hide();
		$('#btn-edit-my-products').hide();
});
$('#close').on("click", function(){
	$('#see-my-products').collapse('hide');
	$('#btn-see-my-products').show();
	$('#btn-edit-my-products').show();
});