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

    $(() => {


        function openOverlay(a, b) {
            singleToggle(a, b);
        }


        // Close modal with window click
        window.onclick = function(event) {

            if (event.target == modal1) {
                modal.style.display = "none";
            }
        }
    })
    if (event.target == modal1) {
        modal.style.display = "none";
    }
});

openOverlay($('#nikog'), $("#overlaynikoid"));

$("#nikog").slideToggle();