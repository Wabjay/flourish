/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function() {

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
