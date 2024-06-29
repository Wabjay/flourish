//  // NAVBAR DROPDOWN
const sections = ['hero', 'experience', 'partners', 'engagement', 'waitlist'];

document.addEventListener("DOMContentLoaded", function() {
    sections.forEach(section => {
        fetch(`./src/constants/about/${section}.html`)
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
