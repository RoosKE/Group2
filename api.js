$(() => {
let searchWord = "#search";

let results = [i];

function search(searchWord) {
    $.ajax({
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&flightdirection=D&airline=" + searchWord + "&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "Accept": "application/json",
            "ResourceVersion": "v3"
        },
        success: function(data) {
            for (let i = 0; i < data.length; i++) {
                appendToResults(data.flights[i]); {
                appendToResults(data.flights[0]); {

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
    // The destinations one is not working!!! Apparently we need the IATA codes, but I don't think we can ask people to type in the IATA code of the country.... 
    $.ajax({
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&flightname=" + searchWord + "&flightdirection=D&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "Accept": "application/json",
            "ResourceVersion": "v3"
        },
        success: function(data) {
            for (let i = 0; i < data.length; i++) { // Finish the loop
                appendToResults(data.flights[0]); {
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
        url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&scheduledate=" + searchWord + "&flightdirection=D&includedelays=false&page=0&sort=%2Bscheduletime",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        headers: {
            "Accept": "application/json",
            "ResourceVersion": "v3"
        },
        success: function(data) {
            for (let i = 0; i < data.length; i++) { // Finish the loop
                appendToResults(data.flights[0]); {
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
};
search()
});
};
