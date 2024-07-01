
const sections = ['faq', 'hero', 'growth', 'build', 'statement', 'partners'];

document.addEventListener("DOMContentLoaded", function() {
  const loadSectionPromises = sections.map(section => {
      return fetch(`./src/constants/index/${section}.html`)
          .then(response => response.text())
          .then(data => {
              const placeholder = document.getElementById(`${section}-placeholder`);
              if (placeholder) {
                  placeholder.innerHTML = data;
              }
          })
          .catch(error => console.error('Error loading section:', section, error));
  });

  // Once all sections are loaded, add event listeners to .question elements
//   Promise.all(loadSectionPromises).then(() => {
//       document.querySelectorAll('.question').forEach(item => {
//           item.addEventListener('click', () => {
//               const answer = item.nextElementSibling;
//               const arrow = item.querySelector('.arrow');
//               if (answer.style.display === 'block') {
//                 //   answer.style.display = 'none';
//                   arrow.classList.remove('bggold');
//                   arrow.innerHTML = "+";   
//                   answer.classList.toggle('hidden');
//                   answer.style.maxHeight = content.classList.contains('hidden') ? '0' : `${content.scrollHeight}px`;
//               } else {
//                   answer.style.display = 'block';
//                   arrow.classList.add('bggold');
//                   arrow.innerHTML = "-";
//               }
//           });
//       });
//   });
// });



  // Once all sections are loaded, add event listeners to .question elements
  Promise.all(loadSectionPromises).then(() => {
    document.querySelectorAll('.question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const arrow = item.querySelector('.arrow');
                arrow.classList.toggle('bggold');
                answer.classList.contains('hidden') ? arrow.innerHTML = "-" : arrow.innerHTML = "+";   
                answer.classList.toggle('hidden');
                answer.style.maxHeight = answer.classList.contains('hidden') ? '0' : `${answer.scrollHeight}px`;
        });
    });
});
});