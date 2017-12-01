$(() => {
    $(document).ready(function() {
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

        //Team starts here //
        $(".close").on("click", () => {
            $(".teamoverlay").hide();
        });

        $("#niko").on("click", () => {
            $("#overlayniko").show(500);
        });

        $("#roos").on("click", () => {
            $("#overlayroos").show(500);
        });

        $("#simonas").on("click", () => {
            $("#overlaysimonas").show(500);
        });

        $("#rosanne").on("click", () => {
            $("#overlayrosanne").show(500);
        });

        $("#nils").on("click", () => {
            $("#overlaynils").show(500);
        });
    });
});
