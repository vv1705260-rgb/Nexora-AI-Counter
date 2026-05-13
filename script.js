/* =========================================
   SELECT ELEMENTS
========================================= */

const counter =
    document.getElementById("counter");

const incrementBtn =
    document.getElementById("incrementBtn");

const decrementBtn =
    document.getElementById("decrementBtn");

const resetBtn =
    document.getElementById("resetBtn");

const historyList =
    document.getElementById("historyList");

const totalClicks =
    document.getElementById("totalClicks");

const highestCount =
    document.getElementById("highestCount");

const productivityScore =
    document.getElementById("productivityScore");

const milestoneText =
    document.getElementById("milestoneText");

const notification =
    document.getElementById("notification");

const themeToggle =
    document.getElementById("themeToggle");

const aiTip =
    document.getElementById("aiTip");

const motivationText =
    document.getElementById("motivationText");

const clickSound =
    document.getElementById("clickSound");

const progressCircle =
    document.querySelector(".progress-circle");

const cursorGlow =
    document.querySelector(".cursor-glow");

const loaderWrapper =
    document.getElementById("loaderWrapper");


/* =========================================
   COUNTER VARIABLES
========================================= */

let count = 0;

let totalActions = 0;

let highest = 0;


/* =========================================
   MOTIVATIONAL QUOTES
========================================= */

const quotes = [

    "Success starts with consistent actions.",

    "Small progress is still progress 🚀",

    "Discipline creates productivity 🔥",

    "Your future is built by daily habits 👑",

    "Focus on growth, not excuses 💡",

    "Consistency beats motivation every time ⚡"

];


/* =========================================
   AI PRODUCTIVITY TIPS
========================================= */

const tips = [

    "AI Tip: Stay focused on one task at a time.",

    "AI Tip: Short breaks improve productivity.",

    "AI Tip: Track progress daily for growth.",

    "AI Tip: Consistency creates mastery.",

    "AI Tip: Celebrate small achievements 🎉"

];


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loaderWrapper.style.opacity = "0";

        loaderWrapper.style.visibility = "hidden";

    }, 1800);

});


/* =========================================
   PARTICLE EFFECT
========================================= */

const particlesContainer =
    document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    const size =
        Math.random() * 5 + 2;

    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 15 + 5}s`;

    particle.style.opacity =
        Math.random();

    particlesContainer.appendChild(
        particle
    );

}


/* =========================================
   MATRIX BACKGROUND EFFECT
========================================= */

const canvas =
    document.getElementById("matrixCanvas");

const ctx =
    canvas.getContext("2d");

canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

const letters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;

const columns =
    canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {

    drops[i] = 1;

}

function drawMatrix() {

    ctx.fillStyle =
        "rgba(2,6,23,0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
        "#06b6d4";

    ctx.font =
        `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {

        const text =
            letters[
                Math.floor(
                    Math.random() *
                    letters.length
                )
            ];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize >
                canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix, 35);


/* =========================================
   UPDATE COUNTER
========================================= */

function updateCounter() {

    counter.innerText = count;

    totalClicks.innerText =
        totalActions;

    highestCount.innerText =
        highest;

    const productivity =
        Math.min(count, 100);

    productivityScore.innerText =
        `${productivity}%`;

    updateProgressRing();

    updateMilestones();

}


/* =========================================
   PROGRESS RING
========================================= */

function updateProgressRing() {

    const radius = 110;

    const circumference =
        2 * Math.PI * radius;

    const offset =
        circumference -
        (count / 100) * circumference;

    progressCircle.style.strokeDashoffset =
        offset;

}


/* =========================================
   HISTORY ADD
========================================= */

function addHistory(message) {

    const li =
        document.createElement("li");

    li.innerText = message;

    historyList.prepend(li);

}


/* =========================================
   SHOW NOTIFICATION
========================================= */

function showNotification(text) {

    notification.innerText = text;

    notification.classList.add(
        "show"
    );

    setTimeout(() => {

        notification.classList.remove(
            "show"
        );

    }, 3000);

}


/* =========================================
   PLAY SOUND
========================================= */

function playSound() {

    clickSound.currentTime = 0;

    clickSound.play();

}


/* =========================================
   MILESTONES
========================================= */

function updateMilestones() {

    if (count >= 100) {

        milestoneText.innerText =
            "Legend 👑";

    }

    else if (count >= 50) {

        milestoneText.innerText =
            "Master 🔥";

    }

    else if (count >= 25) {

        milestoneText.innerText =
            "Focused 🚀";

    }

    else if (count >= 10) {

        milestoneText.innerText =
            "Beginner 🎉";

    }

    else {

        milestoneText.innerText =
            "Starter";

    }

}


/* =========================================
   CONFETTI EFFECT
========================================= */

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            "10px";

        confetti.style.height =
            "10px";

        confetti.style.borderRadius =
            "50%";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.zIndex =
            "999999";

        confetti.style.transition =
            "3s linear";

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.style.transform =
                `translateY(100vh)
                 rotate(720deg)`;

            confetti.style.opacity =
                "0";

        }, 50);

        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }

}


/* =========================================
   INCREMENT
========================================= */

incrementBtn.addEventListener(
    "click",
    () => {

        count++;

        totalActions++;

        if (count > highest) {

            highest = count;

        }

        playSound();

        addHistory(
            `➕ Increased to ${count}`
        );

        updateCounter();

        if (
            count === 10 ||
            count === 25 ||
            count === 50 ||
            count === 100
        ) {

            showNotification(
                `🎉 Milestone ${count} achieved!`
            );

            createConfetti();

        }

    }
);


/* =========================================
   DECREMENT
========================================= */

decrementBtn.addEventListener(
    "click",
    () => {

        if (count > 0) {

            count--;

            totalActions++;

            playSound();

            addHistory(
                `➖ Decreased to ${count}`
            );

            updateCounter();

        }

        else {

            showNotification(
                "⚠️ Counter cannot go below zero"
            );

        }

    }
);


/* =========================================
   RESET
========================================= */

resetBtn.addEventListener(
    "click",
    () => {

        count = 0;

        playSound();

        addHistory(
            "🔄 Counter reset"
        );

        updateCounter();

        showNotification(
            "Counter reset successfully"
        );

    }
);


/* =========================================
   KEYBOARD SHORTCUTS
========================================= */

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "ArrowUp"
        ) {

            incrementBtn.click();

        }

        if (
            e.key === "ArrowDown"
        ) {

            decrementBtn.click();

        }

        if (
            e.key.toLowerCase() === "r"
        ) {

            resetBtn.click();

        }

    }
);


/* =========================================
   DARK LIGHT MODE
========================================= */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        const icon =
            themeToggle.querySelector("i");

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            icon.className =
                "fa-solid fa-sun";

        }

        else {

            icon.className =
                "fa-solid fa-moon";

        }

    }
);


/* =========================================
   AI TIPS ROTATION
========================================= */

let tipIndex = 0;

setInterval(() => {

    tipIndex++;

    if (
        tipIndex >= tips.length
    ) {

        tipIndex = 0;

    }

    aiTip.innerText =
        tips[tipIndex];

}, 4000);


/* =========================================
   QUOTES ROTATION
========================================= */

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if (
        quoteIndex >= quotes.length
    ) {

        quoteIndex = 0;

    }

    motivationText.innerText =
        quotes[quoteIndex];

}, 5000);


/* =========================================
   CURSOR GLOW
========================================= */

document.addEventListener(
    "mousemove",
    (e) => {

        cursorGlow.style.left =
            e.clientX + "px";

        cursorGlow.style.top =
            e.clientY + "px";

    }
);


/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);


/* =========================================
   INITIALIZE
========================================= */

updateCounter();


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "🚀 Nexora AI Productivity Dashboard Loaded Successfully"
);
