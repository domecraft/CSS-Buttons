$(document).ready(function () {
    var index = 0
	    $("#blue").click(function () {
            index = index + 1
            if (index % 2==0) {
	        $("#green").show(100);
            }
	    });
	    $("#blue").click(function () {
            if (index%2==1) {
	       $("#green").hide(100);
            }
	    });
    $("#green").mouseover(function () {
        $("#green").animate({
            opacity: 0.8,
            height: "400px"
        }, 200);
    });
    $("#green").mouseleave(function () {
        $("#green").animate({opacity: 1}, 200);
    });
	});
