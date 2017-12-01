$(() => {
    let results = [];

    $('#search').change(function(e) {
        // search(e.target.value);
        search(e.target.value);
    });

    $("#allFlights").on('click', function(e) {
        getAllFlights();
    })




    getAllFlights = function() {
        $("#paginator").html("");
        $.ajax({
            url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&scheduledate=2017-12-01&includedelays=false&page=1&sort=%2Bscheduletime",
            method: "GET",
            contentType: "application/json; charset=UTF-8",
            headers: {
                "ResourceVersion": "v3"
            }
        }).then(function(data, status, xhr) {

            var responseHeader = xhr.getResponseHeader('link');
            var trim = responseHeader.substr(0, responseHeader.indexOf('rel="last"'));
            var one = trim[trim.length - 6];
            var two = trim[trim.length - 5];
            var three = trim[trim.length - 4];
            var page = one + two + three;

            $("#testas").html("");
            data.flights.forEach(function(item) {
                var html = "<tr><td>" + item.flightName + "</td><td>" + item.scheduleTime + "</td><td>" + item.terminal + "</td><td>" + item.gate + "</td>";
                $("#testas").append(html);
            });

            //Make paginator
            var string = "<nav aria-label='Page navigation example'><ul class='pagination'> <li class='page-item'><a class='page-link' href='#'>Previous</a></li>";

            for (var i = 1; i <= page; i++) {
                string += "<li class='page-item'><a class='page-link' onclick='getAllFlightsByPage(" + i + ");'href='#'>" + i + "</a></li>";
            }

            string += "</ul></nav>";
            $("#paginator").append(string);
        })
    };


    getAllFlightsByPage = function(page) {
        $("#paginator").html("");
        $.ajax({
            url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&scheduledate=2017-12-01&includedelays=false&page=" + page + "&sort=%2Bscheduletime",
            method: "GET",
            contentType: "application/json; charset=UTF-8",
            headers: {
                "ResourceVersion": "v3"
            }
        }).then(function(data, status, xhr) {
            console.log(data);

            var responseHeader = xhr.getResponseHeader('link');
            var trim = responseHeader.substr(0, responseHeader.indexOf('rel="last"'));
            var one = trim[trim.length - 6];
            var two = trim[trim.length - 5];
            var three = trim[trim.length - 4];
            var page = one + two + three;

            $("#testas").html("");
            data.flights.forEach(function(item) {
                var html = "<tr><td>" + item.flightName + "</td><td>" + item.scheduleTime + "</td><td>" + item.terminal + "</td><td>" + item.gate + "</td>";
                $("#testas").append(html);
            });

            var string = "<nav aria-label='Page navigation example'><ul class='pagination'> <li class='page-item'><a class='page-link' href='#'>Previous</a></li>";


            for (var i = 1; i <= page; i++) {
                string += "<li class='page-item'><a class='page-link' onclick='getAllFlightsByPage(" + i + ");'href='#'>" + i + "</a></li>";
                // $("#testas").append(paginator);
            }
            string += "</ul></nav>";
            $("#paginator").append(string);
        })
        // success: function(data) {

        // },
        // success: function(data) {
        //     console.log("This is a check if it is working");
        //     console.log(data);
        // },
        // error: function(xhr, error, msg) {
        //     console.log("IT'S GOING WRONG");
        //     console.log(error);
        //     console.log(msg);
        // }

    }




    function search(searchWord) {
        // This AJAX call takes by flight name: KL2454
        $.ajax({
            url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&flightname=" + searchWord + "&includedelays=false&page=0&sort=%2Bscheduletime",
            method: "GET",
            contentType: "application/json; charset=UTF-8",
            headers: {
                "ResourceVersion": "v3"
            },
            success: handleResults,
            // success: function(data) {
            //     console.log("This is a check if it is working");
            //     console.log(data);
            // },
            error: function(xhr, error, msg) {
                console.log("IT'S GOING WRONG");
                console.log(error);
                console.log(msg);
            }
        });
        // This AJAX call takes by schedule date
        $.ajax({
            url: "https://api.schiphol.nl/public-flights/flights?app_id=8d8f7e2a&app_key=e8903a8da89481aaf3fc5da7a2faf7bf&scheduledate=2017-12-01&scheduletime=" + searchWord + "&flightdirection=D&includedelays=true&page=0&sort=%2Bscheduletime",

            method: "GET",
            contentType: "application/json; charset=UTF-8",
            headers: {
                // "Accept": "application/json",
                "ResourceVersion": "v3"

            },
            success: handleResults,
            error: function(xhr, error, msg) {
                console.log("IT'S GOING WRONG");
                console.log(error);
                console.log(msg);
            }
        });
    };
    // search('DL0057')
    // search('20:00')
    function handleResults(data) {
        data.flights.forEach(function(item) {
            var html = "<tr><td>" + item.flightName + "</td><td>" + item.scheduleTime + "</td><td>" + item.terminal + "</td><td>" + item.gate + "</td>";
            $("#testas").append(html);
        })
    }
});
