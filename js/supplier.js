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
$('#btnEditMyProducts').on("click", function(){
	$('.sidebar-nav').removeClass('hide');
})
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

$('.category li').on("click", function(){
	alert($(this).text());

});
