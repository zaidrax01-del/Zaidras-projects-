/* =========================================
   animation.js
   Scroll & Animation Controller
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const animated = document.querySelectorAll(
        ".fade-up, .fade-down, .fade-left, .fade-right, .zoom, .rotate"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });

    animated.forEach(item => observer.observe(item));

});


/* Floating Elements */

document.querySelectorAll(".float, .float-slow").forEach((el, index) => {

    el.style.animationDelay = `${index * 0.3}s`;

});


/* Mouse Glow Effect */

const glow = document.querySelector(".mouse-glow");

if (glow) {

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


/* Counter Animation */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const target = parseInt(el.dataset.count);

        let value = 0;

        const speed = target / 80;

        const update = () => {

            value += speed;

            if (value < target) {

                el.textContent = Math.floor(value);

                requestAnimationFrame(update);

            } else {

                el.textContent = target.toLocaleString();

            }

        };

        update();

        counterObserver.unobserve(el);

    });

});

counters.forEach(counter => counterObserver.observe(counter));


/* Image Tilt */

document.querySelectorAll(".tilt").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 20;

        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});


/* Hero Glow Pulse */

const heroGlow = document.querySelector(".hero-glow");

if (heroGlow) {

    let scale = 1;

    let direction = 1;

    setInterval(() => {

        scale += direction * 0.002;

        if (scale >= 1.05) direction = -1;

        if (scale <= 1) direction = 1;

        heroGlow.style.transform = `scale(${scale})`;

    }, 16);

}
