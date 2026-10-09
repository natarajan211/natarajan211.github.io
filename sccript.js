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
   TERMINAL RAIN BACKGROUND
========================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

const fontSize = 17;

const columnGap = 22;

const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let canvasWidth = 0;

let canvasHeight = 0;

let pixelRatio = 1;

let streams = [];


function resizeCanvas() {

    canvasWidth = window.innerWidth;

    canvasHeight = window.innerHeight;

    pixelRatio =
        Math.min(window.devicePixelRatio || 1, 2);

    canvas.width =
        Math.round(canvasWidth * pixelRatio);

    canvas.height =
        Math.round(canvasHeight * pixelRatio);

    ctx.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );

    const columnCount =
        Math.ceil(canvasWidth / columnGap);

    streams = Array.from(
        { length: columnCount },
        (_, index) => ({
            x: index * columnGap,
            y: Math.random() * canvasHeight,
            speed: 1.2 + Math.random() * 2.4,
            trailLength: 6 + Math.floor(Math.random() * 9)
        })
    );

    if (reducedMotion) {
        drawTerminalRain();
    }

}


function drawTerminalRain() {

    ctx.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );

    ctx.font =
        `${fontSize}px Consolas, "Courier New", monospace`;

    ctx.textAlign = "center";

    streams.forEach(stream => {

        for (
            let step = 0;
            step < stream.trailLength;
            step++
        ) {
            const y =
                stream.y - step * fontSize;

            if (y < 0 || y > canvasHeight) {
                continue;
            }

            const character =
                Math.random() < 0.5 ? "0" : "1";

            const opacity =
                0.62 * (1 - step / stream.trailLength);

            ctx.fillStyle =
                step === 0
                    ? "#d5ffe3"
                    : `rgba(76, 255, 145, ${opacity})`;

            ctx.fillText(
                character,
                stream.x,
                y
            );
        }

        if (!reducedMotion) {
            stream.y += stream.speed;

            if (stream.y - stream.trailLength * fontSize > canvasHeight) {
                stream.y = -Math.random() * canvasHeight * 0.35;
            }
        }
    });

    if (!reducedMotion) {
        requestAnimationFrame(drawTerminalRain);
    }
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

if (!reducedMotion) {
    requestAnimationFrame(drawTerminalRain);
}


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


/*-----------------------------audio -----------------------*/
   const music = document.getElementById("music");

    document.addEventListener("click", function () {
        music.play();
    }, { once: true });