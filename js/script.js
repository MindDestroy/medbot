$('div.sidebar').hide();
$('#menu').click(function(){
	if($('div.sidebar').is(':hidden')){
		$('div.sidebar').show();
    	$('div.sidebar').css('margin-left','-10px');
    }else{
    	$('div.sidebar').css('margin-left','-400px');
    	$('div.sidebar').hide(1000);
    } 
});
