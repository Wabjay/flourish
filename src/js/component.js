// var grid = document.querySelector(".grid");
// var display_toggle = document.querySelector(".display_toggle");
// grid.addEventListener("click", function () {
//   console.log(display_toggle.classList); 
//   display_toggle.classList.toggle("toggle");
// });


  // JavaScript to load header content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
        
  // Activate the link based on the current URL
  activateLinkByURL();
});


document.addEventListener("DOMContentLoaded", function() {
  // Load footer content
  fetch("./src/constants/footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));

});

function activateLinkByURL() {
  const currentPageURL = new URL(window.location.href).pathname; // Get pathname (without parameters)

  // Find all header links
  const headerLinks = document.querySelectorAll(".link"); // Replace ".link" with your actual selector

  // Loop through header links
  headerLinks.forEach(link => {
      const linkURL = new URL(link.getAttribute("href"), window.location.origin).pathname; // Get pathname from link href
      console.log(currentPageURL, linkURL);
      if (currentPageURL === linkURL) {
          link.classList.add("bg-grey-1"); // Add "active" class to the matching link
      } else {
          link.classList.remove("bg-grey-1"); // Remove "active" class from non-matching links (optional)
      }
  });
}
