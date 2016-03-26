$('#btnSeeMp').on( "click", function() {
		$('#seeMp').collapse();
		$('#btnSeeMp').hide();
		$('#btnEditMp').hide();
});
$('#btnMpClose').on("click", function(){
	$('#seeMp').collapse('hide');
	$('#btnSeeMp').show();
	$('#btnEditMp').show();
});
$('#btnEditMp').on("click", function(){
	//show side bar menu, to be fixed later 
	//$('.sidebar-nav').removeClass('hide');
	$('#editMp').collapse();
	$('#btnSeeMp').hide();
    $('#btnEditMp').hide();
})
$('#btnEditMpSave').on("click", function(){
	//show side bar menu 
	$('#editMp').collapse('hide');
	$('btnEditMpSave').hide();
	$('#btnSeeMp').show();
	$('#btnEditMp').show();
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
