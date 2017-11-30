$(() => {
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

    $("#cookiebtn").on("click", () => {
      $("#cookieoverlayid").hide();
    });

});
