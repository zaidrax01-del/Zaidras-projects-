/* ======================================
   $BREAD WEBSITE
   MAIN.JS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("active");
            navLinks.classList.toggle("active");

        });

    }

    /* ==========================
       STICKY NAVBAR
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(0,0,0,.92)";
            header.style.padding = "15px 0";
            header.style.boxShadow = "0 12px 40px rgba(0,0,0,.45)";

        } else {

            header.style.background = "rgba(0,0,0,.45)";
            header.style.padding = "20px 0";
            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const topBtn = document.querySelector(".back-to-top");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================
       FAQ ACCORDION
    ========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        item.addEventListener("click", () => {

            faqItems.forEach(f => {

                if(f !== item){

                    f.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const reveals = document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom,.rotate"

    );

    const reveal = () => {

        reveals.forEach(el => {

            const top = el.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if(top < visible){

                el.classList.add("active");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);

    /* ==========================
       ACTIVE NAV LINK
    ========================== */

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("current");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("current");

            }

        });

    });

    /* ==========================
       PARALLAX HERO
    ========================== */

    const heroImage = document.querySelector(".bread-mascot");

    window.addEventListener("mousemove", (e)=>{

        if(!heroImage) return;

        const x = (window.innerWidth/2 - e.clientX)/45;
        const y = (window.innerHeight/2 - e.clientY)/45;

        heroImage.style.transform =
        `translate(${x}px,${y}px)`;

    });

    /* ==========================
       FLOATING CARDS
    ========================== */

    const cards = document.querySelectorAll(".floating-card");

    cards.forEach((card,index)=>{

        setInterval(()=>{

            card.style.transform =
            `translateY(${Math.sin(Date.now()/700 + index)*8}px)`;

        },16);

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
