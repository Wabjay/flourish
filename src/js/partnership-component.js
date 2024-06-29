//  // NAVBAR DROPDOWN
const sections = ['hero', 'ecosystem', 'engagement'];

document.addEventListener("DOMContentLoaded", function() {
    sections.forEach(section => {
        fetch(`./src/constants/partners/${section}.html`)
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
