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

	// Get the modal
    var modal = document.getElementById('modal_video');

    var btn = document.getElementById("modal_btn"); // Get the button that opens the modal
    btn.onclick = function() { // When the user clicks the button, open the modal 
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
    }

    var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
    span.onclick = function() { // When the user clicks on <span> (x), close the modal
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    //window.onclick = function(event) {
    //    if (event.target == modal) {
    //        modal.style.display = "none";
    //    }
    //}
});