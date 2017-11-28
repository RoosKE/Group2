// Get Niko's image and insert it in the modal
var modal = document.getElementById("myModal");
var img = document.getElementById("nikopic");
var modalImg = document.getElementById("nikoimg");
var captionText = document.getElementById("caption");
if(img) {
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
}
