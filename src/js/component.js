/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function() {
  // Load footer content
  fetch("./src/constants/footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));

});



// $(document).ready(function() {
//   $('a').click(function(e) {
//       e.preventDefault();
//       var href = $(this).attr('href');
//       $('.transition-fade').addClass('page-hidden');
//       setTimeout(function() {
//         console.log(href);
//           window.location = href;
//       }, 400); // Delay to match transition duration
//   });
// });


AOS.init();





document.addEventListener("DOMContentLoaded", function() {
  // Select the dropdown icon and the links container
  const grid = document.querySelector("#dropdown");
  const displayToggle = document.querySelector("#links");

  // Ensure the dropdown is displayed initially and the links are hidden
 
    // Toggle the display of the links on click
    grid.addEventListener("click", function() {
      displayToggle.classList.toggle("hidden");
      displayToggle.classList.toggle("flex");
    });

});




const submit = document.getElementById('form');
const popup = document.getElementById('popup');
const close = document.getElementById('close');

submit.addEventListener('click', function(){
  let email = document.getElementById('email');
  submit.classList.add('!bg-gold-1');
  // popup.classList.remove('hidden');
  //     popup.classList.add('flex');
  axios.post('https://api.airtable.com/v0/appqNvp6gfKRTbfny/emails', {
    "fields": {Email: email.value}
  }, {
    headers: {
      'Authorization': 'Bearer pateCUjy6sW5LgDTX.fa15b6f25859e52e325c50fa8c8b8f0b115fdc1a1e7c2ad58a8856638c512702',
      'Content-Type': 'application/json'
    }
  })
    .then((resp) => {
      popup.classList.remove('hidden');
      popup.classList.add('flex');
      email.value = "";
      console.log(resp);
    })
    .catch(function (error) {
      console.error(error);
      submit.classList.remove('!bg-gold-1');      
    });
});

close.addEventListener('click', function(){
  popup.classList.add('hidden');
  popup.classList.remove('flex');
  submit.classList.remove('!bg-gold-1');

}
);

// const links = document.querySelectorAll('.link');

// links.forEach(link => {
//   console.log(link);
// });

