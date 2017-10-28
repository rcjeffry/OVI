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

	// When the user clicks the button, open the modal 
    $('.modal_btn').click(function(){
        var target = $(this).attr('data-target');

        // Get the modal
        var modal = $('#modal_'+target);
        modal.css({
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
        });
    });
    
    // When the user clicks on <span> (x), close the modal
    $(".close").click(function(){
        $('.modal').css({
            display : "none"
        });
        
    });

    // When the user clicks anywhere outside of the modal, close it
    //window.onclick = function(event) {
    //    if (event.target == modal) {
    //        modal.style.display = "none";
    //    }
    //}
});