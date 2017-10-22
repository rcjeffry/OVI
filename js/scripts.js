function cambiar_titulo_y_active(){
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	if(filename == ''){
		filename = 'index.html';
	}
	
	var name_link = $('a[href*="'+filename+'"]').text();

	$('div.nav-container a').removeClass('active');
	$('a[href*="'+filename+'"]').addClass('active');

	name_link = MaysPrimera(name_link.toLowerCase());
	document.title = document.title + ' ' + name_link;
}

function MaysPrimera(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function(){
	cambiar_titulo_y_active();
});