//  // NAVBAR DROPDOWN
const sections = ['hero', 'cards', 'service', 'service-dark', 'engagement', 'process', 'waitlist'];

document.addEventListener("DOMContentLoaded", function() {
    sections.forEach(section => {
        fetch(`./src/constants/services/${section}.html`)
            .then(response => response.text())
            .then(data => {
                const placeholder = document.getElementById(`${section}-placeholder`);
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
            })
            .catch(error => console.error('Error loading section:', section, error));
    });
});

//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/cards.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("cards-placeholder").innerHTML = data;
//         });
// });


//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/service.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("service-placeholder").innerHTML = data;
//         });
// });


//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/service-dark.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("service-dark-placeholder").innerHTML = data;
//         });
// });



//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/engagement.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("engagement-placeholder").innerHTML = data;
//         });
// });



//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/process.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("process-placeholder").innerHTML = data;
//         });
// });



//   // JavaScript to load faq content
//   document.addEventListener("DOMContentLoaded", function() {
//     fetch("./src/constants/services/waitlist.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("waitlist-placeholder").innerHTML = data;
//         });
// });



