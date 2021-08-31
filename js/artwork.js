  var menu = document.getElementsByClassName("close")[0];
  menu.onclick = function() {
    nav.style.display = "none";
  }

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var nav = document.getElementById("nav");

  function zoom(img, alt){
    modal.style.display = "block";
    modalImg.src = img;
    captionText.innerHTML = alt;
  }

  // Get the <span> element that closes the modal

  var span = document.getElementsByClassName("close")[1];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    document.img = "";
  }
