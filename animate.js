$(()=> {

    $("#click1").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#flightsclick").offset().top - 150
        }, 1000);
    });
    $("#click2").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#newsclick").offset().top + 120
        }, 1000);
    })
    $("#click3").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $("#contactus").offset().top - 50
        }, 1000);
    })
    $("#click4").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $("#theteam").offset().top
        }, 1000);
    })
});
