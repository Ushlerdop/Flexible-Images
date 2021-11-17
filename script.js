function slidesPlugin(activeSlide = 3) {
    const $container = document.querySelector('.container');
    const $slides = document.querySelectorAll('.slide');
    
    $slides[activeSlide-1].classList.add('active');
    
    $container.addEventListener('click', (e) => {
        if (e.target.matches('.slide')) {
            clearActiveClasses();
            e.target.classList.add('active');
        }
    })
    
    function clearActiveClasses() {
        $slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin(2);