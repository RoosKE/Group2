$(() => {

  $("#cookiebtn").on("click", () => {
    event.preventDefault();
    $("#cookiemodalid").hide();
  });

});


    /* 
    $("form[name='contact-form']").validate({
        errorClass: "my-error-class",
        validClass: "my-valid-class",
        rules: {
            firstname: "required",
            yourmessage: "required",

            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstname: "Please enter your name!",
            yourmessage: "Please type your message!",
            email: "Please fill in your email address"
        },

    });

    $(".submitbutton").on('click', (event) => {
        event.preventDefault();
        if ($('#cform').valid()) {
            $(".form-group").hide();
            $("#send").hide();
            $(".aftersubmit").show();
            setTimeout(function() {
                $(".aftersubmit").css('display', 'none');
            }, 5000);
        };
    });







    // Get Niko's image and insert it in the modal


$("#nikog").on("click", function() {
    overlay.style.display = "block";
});

var nikog = document.getElementById("nikog");
var overlay = document.getElementById("overlaynikoid");

nikog.onclick = function() {
    overlay.style.display = "block";
 };




// API PART not done yet!!! But to show you what is going on
$('#search').change(function(e) {
    $('#wrapper').empty();
    search(e.target.value);
});

let results = [];

function search(searchWord) {
    $.ajax({
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&" + flightName + "&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "ResourceVersion": "v3"
        },
        success: function(data) {
            if (data.flights[0].flightDirection = "D") {
                for (let i = 0; i < data.length; i++) {
                    appendToResults(data.flights[i]); {
                        results.push(data);
                    };
                };
                console.log("This is a check if it is working");
                console.log(results);
            };
        },
        error: function(xhr, error, msg) {
            console.log("IT'S GOING WRONG");
            console.log(error);
            console.log(msg);
        }
    });
    $.ajax({
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&" + destinations + "&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "ResourceVersion": "v3"
        },
        success: function(data) {
            if (data.flights[0].flightDirection = "D") {
                for (let i = 0; i < data.length; i++) { // Finish the loop
                    appendToResults(data.flights[0]); {
                        results.push(data);
                    };
                };
                console.log("This is a check if it is working");
                console.log(results);
            };
        },
        error: function(xhr, error, msg) {
            console.log("IT'S GOING WRONG");
            console.log(error);
            console.log(msg);
        }
    });
    $.ajax({
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&" + prefixICAO + "&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "ResourceVersion": "v3"
        },
        success: function(data) {
            if (data.flights[0].flightDirection = "D") {
                for (let i = 0; i < data.length; i++) { // Finish the loop
                    appendToResults(data.flights[0]); {
                        results.push(data);
                    };
                };
                console.log("This is a check if it is working");
                console.log(results);
            };
        },
        error: function(xhr, error, msg) {
            console.log("IT'S GOING WRONG");
            console.log(error);
            console.log(msg);
        }
    });
};