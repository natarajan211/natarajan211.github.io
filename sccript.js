/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}


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
    const typing = document.getElementById("typing");
    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1600);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typingEffect, deleting ? 45 : 95);
}

typingEffect();


/* =========================================
   INTERACTIVE TERMINAL MATRIX CODE STREAM
========================================= */

const canvas = document.getElementById("particles");
const ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // High-tech terminal glyphs: binary, hex, code symbols & matrix katakana
    const glyphs = "0101010101ABCDEF0123456789ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ{}<>/*$#@!=~";

    let canvasWidth = 0;
    let canvasHeight = 0;
    let pixelRatio = 1;
    let columns = [];
    const columnWidth = 22;
    const fontSize = 16;
    let mouse = { x: null, y: null, radius: 120 };

    class MatrixStream {
        constructor(x) {
            this.x = x;
            this.reset(true);
        }

        reset(initial = false) {
            this.y = initial ? (Math.random() * -canvasHeight) : -Math.random() * 200;
            this.speed = 1.3 + Math.random() * 2.2;
            this.length = 10 + Math.floor(Math.random() * 16);
            this.chars = [];
            for (let i = 0; i < this.length; i++) {
                this.chars.push(glyphs[Math.floor(Math.random() * glyphs.length)]);
            }
            this.mutationCounter = 0;
            this.mutationInterval = 3 + Math.floor(Math.random() * 6);
        }

        update() {
            // Mouse interaction: speed up stream near cursor
            let currentSpeed = this.speed;
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    currentSpeed *= 1.8;
                }
            }

            this.y += currentSpeed;

            // Randomly mutate characters to simulate active terminal decryption
            this.mutationCounter++;
            if (this.mutationCounter >= this.mutationInterval) {
                this.mutationCounter = 0;
                const randomIndex = Math.floor(Math.random() * this.length);
                this.chars[randomIndex] = glyphs[Math.floor(Math.random() * glyphs.length)];
            }

            // Reset when trailing end moves past bottom
            if (this.y - this.length * fontSize > canvasHeight) {
                this.reset(false);
            }
        }

        draw() {
            ctx.textAlign = "center";
            ctx.font = `${fontSize}px "Fira Code", "Courier New", monospace`;

            for (let i = 0; i < this.length; i++) {
                const charY = this.y - i * fontSize;

                if (charY < -fontSize || charY > canvasHeight + fontSize) {
                    continue;
                }

                const char = this.chars[i];

                if (i === 0) {
                    // Leading character: bright luminescent white-green with glow
                    ctx.fillStyle = "#eafff0";
                    ctx.shadowColor = "#00ff66";
                    ctx.shadowBlur = 10;
                    ctx.fillText(char, this.x, charY);
                    ctx.shadowBlur = 0;
                } else {
                    // Trailing characters: vibrant matrix emerald fading out smoothly
                    const alpha = Math.max(0.06, (1 - i / this.length) * 0.72);
                    ctx.fillStyle = `rgba(0, 255, 102, ${alpha})`;
                    ctx.fillText(char, this.x, charY);
                }
            }
        }
    }

    function resizeCanvas() {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.round(canvasWidth * pixelRatio);
        canvas.height = Math.round(canvasHeight * pixelRatio);

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const colCount = Math.ceil(canvasWidth / columnWidth);
        columns = Array.from({ length: colCount }, (_, i) => new MatrixStream(i * columnWidth + columnWidth / 2));

        if (reducedMotion) {
            drawMatrixFrame();
        }
    }

    function drawMatrixFrame() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 0; i < columns.length; i++) {
            if (!reducedMotion) {
                columns[i].update();
            }
            columns[i].draw();
        }

        if (!reducedMotion) {
            requestAnimationFrame(drawMatrixFrame);
        }
    }

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener("touchend", () => {
        mouse.x = null;
        mouse.y = null;
    });

    resizeCanvas();

    if (!reducedMotion) {
        requestAnimationFrame(drawMatrixFrame);
    }
}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < windowHeight - 90) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================================
   AUDIO PLAYER
========================================= */

const music = document.getElementById("music");
if (music) {
    document.addEventListener("click", function () {
        music.play().catch(() => {});
    }, { once: true });
}