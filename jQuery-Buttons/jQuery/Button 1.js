	$(document).ready(function () {
	    $("#blue").mouseenter(function () {
	        $("#green").show("fast");
	    });
	    $('body').click(function (event) {
	        if (event.target.id != 'blue') $("#green").hide("fast");
	    });
	});
