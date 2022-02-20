const clock = document.querySelector(".clock");

function drawClock() {
    const now = new Date();
    clock.innerText = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`;
}

if(clock) {
    drawClock();
    setInterval(drawClock, 1000);
}