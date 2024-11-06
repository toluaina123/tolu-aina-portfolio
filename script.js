// Show "Back to Top" button when scrolling down
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Basic form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.querySelector('[name="Email"]').value;
    if (!email.includes('@')) {
        alert("Please enter a valid email.");
        event.preventDefault();
    }
});
