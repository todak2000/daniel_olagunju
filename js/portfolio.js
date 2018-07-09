$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


function show_Mobile()
{

	$('#mobile').removeClass("hide");
	$('#web').addClass("hide");
}
function show_Web()
{
	$('#web').removeClass("hide");
	$('#mobile').addClass("hide");
}

function show_Nothing()
{
	$('#web').addClass("hide");
	$('#mobile').addClass("hide");
}