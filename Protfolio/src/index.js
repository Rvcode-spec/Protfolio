document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#header ul');
    let bar = document.querySelector('#header .fa-bars');

    bar.addEventListener('click', () => {
        menu.classList.toggle('show');
        console.log("Menu toggled");
    });
});

const colors = ["#d20962", "#0ebeff", "#7ac143", "#00a78e", "#00bce4", "#8e43e7", "#005be2",];
const numballs = 30;
const balls = [];
for (let i = 0; i < numballs; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.random() * 80}%`; // Position within #hero-area
    ball.style.top = `${Math.random() * 80}%`;  // Position within #hero-area
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random() * 2 + 0}em`; // Random size between 0.5em and 2.5em
    ball.style.height = ball.style.width;
    balls.push(ball);
    document.getElementById("hero-area").appendChild(ball);
}
// Animate balls
balls.forEach((el, i) => {
    let to = {
        x: Math.random() * 20 - 10, // Random horizontal movement
        y: Math.random() * 20 - 10, // Random vertical movement
    };

    el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // Random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
