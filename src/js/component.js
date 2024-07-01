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


  // JavaScript to load header content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/header.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("header-placeholder").innerHTML = data;
//         })
//         .catch(error => console.error('Error loading header:', error));
        
//   // Activate the link based on the current URL
//   activateLinkByURL();
// });


document.addEventListener("DOMContentLoaded", function() {
  // Load footer content
  fetch("./src/constants/footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));

});



const submit = document.getElementById('form')
const popup = document.getElementById('popup')
const close = document.getElementById('close')


submit.addEventListener('click', function(){
  let email = document.getElementById('email')
  submit.classList.add('!bg-gold-1')
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
      email.value = ""
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
)