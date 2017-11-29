// Get Niko's image and insert it in the modal
var modal = document.getElementById("myModal");
var img = document.getElementById("nikopic");
var modalImg = document.getElementById("nikoimg");
var captionText = document.getElementById("caption");
if (img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
// Get the close element
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

//Close modal with X
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal with window click
window.onclick = function(event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }
};
// API PART not done yet!!! But to show you what is going on
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
                for (let i = 0, ) => // Finish the loop
                    function appendToResults(data.flights[0]) {
                        results.push(data);
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
            console.log("Ja alles is goed dit is de data:");
            console.log(data.scheduleDate, data.scheduleTime, data.destinations, data.flightName, data.prefixICAO);
        },
        error: function(xhr, error, msg) {
            console.log("Kut er ging wat fout");
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
            console.log("Ja alles is goed dit is de data:");
            console.log(data.scheduleDate, data.scheduleTime, data.destinations, data.flightName, data.prefixICAO);
        },
        error: function(xhr, error, msg) {
            console.log("Kut er ging wat fout");
            console.log(error);
            console.log(msg);
        }
    });
};