
  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/faq.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("faq-placeholder").innerHTML = data;
            // console.log(data)
            document.querySelectorAll('.question').forEach(item => {
              console.log('first')
              item.addEventListener('click', () => {
            
                  const answer = item.nextElementSibling;
                  const arrow = item.querySelector('.arrow');
                  if (answer.style.display === 'block') {
                    console.log('first')
                      answer.style.display = 'none';
                      arrow.innerHTML = "-";
                      arrow.style.backgroundColor = 'grey-9'            
                    } else {
                      answer.style.display = 'block';
                      arrow.innerHTML = "+";
                      arrow.style.backgroundColor = 'gold-5';
                  }
              });
            });
        });
});
  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero-placeholder").innerHTML = data;
        });
});

  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/growth.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("growth-placeholder").innerHTML = data;
        });
});


  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/build.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("build-placeholder").innerHTML = data;
        });
});


  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/statement.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("statement-placeholder").innerHTML = data;
        });
});

  // JavaScript to load faq content
  document.addEventListener("DOMContentLoaded", function() {
    fetch("./src/constants/index/partners.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("partners-placeholder").innerHTML = data;
        });
});




document.querySelectorAll('.question').forEach(item => {
  console.log('first')
  item.addEventListener('click', () => {

      const answer = item.nextElementSibling;
      const arrow = item.querySelector('.arrow');
      if (answer.style.display === 'block') {
        console.log('first')
          answer.style.display = 'none';
          arrow.classList.remove('rotate');
      } else {
          answer.style.display = 'block';
          arrow.classList.add('rotate');
          console.log('first')

      }
  });
});