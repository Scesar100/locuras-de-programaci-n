const rick = document.getElementById("rick");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let speed = 0.005;
const speedIncrement = 0.00001;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function persecucion() {
    const rect = rick.getBoundingClientRect();
    const rickX = rect.left + rect.width / 2;
    const rickY = rect.top + rect.height / 2;

    const dx = mouseX - rickX;
    const dy = mouseY - rickY;

    rick.style.left = (rick.offsetLeft + dx * speed) + "px";
    rick.style.top = (rick.offsetTop + dy * speed) + "px";

    speed += speedIncrement;

    if (
        mouseX > rect.left &&
        mouseX < rect.right &&
        mouseY > rect.top &&
        mouseY < rect.bottom
    ) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        requestAnimationFrame(persecucion);
    }
}

window.onload = () => {
    rick.style.left = `${window.innerWidth / 2}px`;
    rick.style.top = `${window.innerHeight / 2}px`;
    persecucion(); // ¡Arranca la persecución!
};