document.addEventListener("DOMContentLoaded", function () {
  // Get the progress bar element
  var progressBar = document.getElementById("myBar");

  // Get the total height of the document
  var totalHeight = document.body.scrollHeight - window.innerHeight;

  // Listen for the scroll event
  window.onscroll = function () {
    // Calculate the scroll progress
    var progress = (window.scrollY / totalHeight) * 100;

    // Update the width of the progress bar
    progressBar.style.width = progress + "%";
  };
});
