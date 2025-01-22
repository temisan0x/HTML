document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle visibility of additional value cards
    var showMoreButton = document.querySelector('.show-more-button');
    var valueCards = document.querySelectorAll('.value-card');

    showMoreButton.addEventListener('click', function() {
        valueCards.forEach(function(card) {
            card.style.display = 'block';
        });
        showMoreButton.textContent = 'Show less';
    });

    // Add more interactivity as needed
});
