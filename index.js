// HERO ANIMATION
gsap.from(".hero-content h1", {
    y: -100,
    opacity: 0,
    duration: 1.5
});


// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 100;
        if (c < target) {
            counter.innerText =
                `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 30);
            ;
        }
        else {
        }
        counter.innerText = target;
    }
    updateCounter();
});




// SCROLL EFFECT
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#1a1a1a';
    }
    else {
    }
    header.style.background = 'rgba(0,0,0,0.3)';
});

