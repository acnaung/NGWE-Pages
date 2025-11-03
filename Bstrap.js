// Dropdwon Menu Hover Behavior

document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        menu.style.display = 'none'; // Auto-hide the dropdown
    });

    dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        menu.style.display = 'block'; // Show the dropdown
    });
});


const scrollTopButton = document.getElementById('scrollTopButton');

// Show the button after scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Smooth scroll to the top when the button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Add Custom JavaScript: Use JavaScript to handle the dropdown links so that when a link is clicked, 
// the carousel moves to the corresponding slide.
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target slide index from data-bs-slide-to
        const slideIndex = this.getAttribute('data-bs-slide-to');
        
        // Get the carousel element
        const carousel = document.querySelector('#testimonialCarousel');

        // Use Bootstrap Carousel API to go to the specified slide
        const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
        carouselInstance.to(slideIndex);
    });
});

