/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });


/* =========================================
   TYPING ANIMATION
========================================= */

const words = [

    "Web Developer",

    "Python Programmer",

    /*"Java Developer",*/

    "Problem Solver",

    "Tech Enthusiast"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    const typing =
        document.getElementById("typing");

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1200
            );

            return;

        }

    }

    else {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typingEffect,

        deleting ? 50 : 100

    );

}


typingEffect();


/* =========================================
   PARTICLE BACKGROUND
========================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();


/* =========================================
   PARTICLE CLASS
========================================= */

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 2 + 0.5;

        this.speedX =
            (Math.random() - 0.5) *
            0.5;

        this.speedY =
            (Math.random() - 0.5) *
            0.5;

    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }

    }


    draw() {

        ctx.beginPath();


        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );


        ctx.fillStyle =
            "rgba(0,229,255,0.8)";


        ctx.fill();

    }

}


/* =========================================
   CREATE PARTICLES
========================================= */

function createParticles() {

    particles = [];


    const amount =
        Math.min(

            120,

            Math.floor(
                window.innerWidth / 10
            )

        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();


/* =========================================
   PARTICLE ANIMATION
========================================= */

function animateParticles() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    /* Connect particles */

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const dx =
                particles[i].x -
                particles[j].x;

            const dy =
                particles[i].y -
                particles[j].y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                ctx.beginPath();


                ctx.moveTo(

                    particles[i].x,

                    particles[i].y

                );


                ctx.lineTo(

                    particles[j].x,

                    particles[j].y

                );


                ctx.strokeStyle =
                    `rgba(
                        0,
                        229,
                        255,
                        ${1 - distance / 120}
                    )`;


                ctx.lineWidth = 0.5;

                ctx.stroke();

            }

        }

    }


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const top =
            element
                .getBoundingClientRect()
                .top;


        if (
            top <
            windowHeight - 100
        ) {

            element.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();