/*=========================================
            TYPING ANIMATION
=========================================*/

const words = [
    "Software Developer",
    "Web Developer",
    "Problem Solver",
    "Cyber Security Enthusiast"
];

const typingText = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();



/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* Close Menu after clicking */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
/*=========================================
            SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
    ".about-card, .skills-box, .project-card, .certificate-card, .contact-card"
);

function revealOnScroll() {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);



/*=========================================
        BUTTON HOVER RIPPLE
=========================================*/

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});
/*=========================================
        ACTIVE NAVBAR ON SCROLL
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        NAVBAR SHADOW ON SCROLL
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/*=========================================
        BACK TO TOP BUTTON
=========================================*/

// Button create

const backToTop = document.createElement("button");

backToTop.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

// Scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});

// Click

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
        HERO IMAGE GLOW EFFECT
=========================================*/

const profile = document.querySelector(".profile-circle");

document.addEventListener("mousemove",(e)=>{

    const x =

        (window.innerWidth/2 - e.clientX)/35;

    const y =

        (window.innerHeight/2 - e.clientY)/35;

    profile.style.transform =

        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    profile.style.transform="rotateX(0) rotateY(0)";

});


/*=========================================
        CONSOLE MESSAGE 😎
=========================================*/

console.log("%cWelcome Recruiter 👋",

"color:#5db9ee;font-size:20px;font-weight:bold;");

console.log("%cThanks for visiting my portfolio.",

"color:white;font-size:14px;");

console.log("%cBuilt with HTML, CSS & JavaScript",

"color:#5db9ee;font-size:13px;");

/*=========================================
        PREMIUM INTRO LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const main = document.getElementById("main-content");

    const loaderText = document.getElementById("loader-text");

    const status = document.querySelector(".loader-status");

const steps = [

["Initializing Portfolio...","Please wait..."],

["Building Experiences...","Loading UI Components..."],

["Loading Projects...","Projects Ready ✓"],

["Loading Skills...","Skills Ready ✓"],

["Preparing Resume...","Resume Ready ✓"],

["Connecting Contact...","Contact Ready ✓"],

["Almost There...","Open to Opportunities 🟢"],

["Welcome Recruiter 👋","Enjoy Your Visit"]

];

    let i = 0;

    const interval = setInterval(() => {

        if (i < steps.length) {

            loaderText.textContent = steps[i][0];

            status.textContent = steps[i][1];

            i++;

        }

    }, 450);

    setTimeout(() => {

        clearInterval(interval);

        loader.classList.add("hide");

        main.classList.add("show");

    }, 3600);

});


/*=========================================
      RESUME BUTTON HOVER
=========================================*/

const resumeText = document.querySelector(".resume-text");

if (resumeText) {

    resumeText.parentElement.addEventListener("mouseenter", () => {

        resumeText.innerHTML = "View Resume 📄";

    });

    resumeText.parentElement.addEventListener("mouseleave", () => {

        resumeText.innerHTML = "Download Resume";

    });

}


/*=========================================
      HERO ENTRY ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero");

    hero.animate(

        [

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:900,

            delay:2600,

            fill:"forwards"

        }

    );

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

setTimeout(()=>{

console.clear();

console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

"color:#5db9ee;font-size:14px;");

console.log("%cWelcome Recruiter 👋",

"color:#5db9ee;font-size:22px;font-weight:bold;");

console.log("%cPortfolio Loaded Successfully",

"color:white;font-size:15px;");

console.log("%cProjects Loaded ✓",

"color:#00ff88;font-size:14px;");

console.log("%cResume Ready ✓",

"color:#00ff88;font-size:14px;");

console.log("%cContact Available ✓",

"color:#00ff88;font-size:14px;");

console.log("%cStatus : Open to Opportunities",

"color:#FFD700;font-size:15px;");

console.log("%cThank you for visiting my portfolio ❤️",

"color:#5db9ee;font-size:15px;");

console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

"color:#5db9ee;font-size:14px;");

},2800);
