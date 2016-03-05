$('#btnSeeMyProducts').on( "click", function() {
		$('#seeMyProducts').collapse();
		$('#btnSeeMyProducts').hide();
		$('#btnEditMyProducts').hide();
});
$('#btnMyProductsClose').on("click", function(){
	$('#seeMyProducts').collapse('hide');
	$('#btnSeeMyProducts').show();
	$('#btnEditMyProducts').show();
});
$('#btnSeeMyShowcase').on( "click", function() {
		$('#seeMyShowcase').collapse();
		$('#btnSeeMyShowcase').hide();
		$('#btnEditMyShowcase').hide();
});
$('#btnMyShowcaseClose').on("click", function(){
	$('#seeMyShowcase').collapse('hide');
	$('#btnSeeMyShowcase').show();
	$('#btnEditMyShowcase').show();
});

