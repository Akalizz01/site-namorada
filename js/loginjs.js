function spawnHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (3 + Math.random() * 4) + 's';
        heart.style.fontSize = (16 + Math.random() * 25) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
}
setInterval(spawnHeart, 300);

const NOSSA_DATA = "2023-12-09";

function checkDate() {
    const userDate = document.getElementById('dateInput').value;
    if (userDate === NOSSA_DATA) {
        for (let i = 0; i < 150; i++) {
            setTimeout(() => spawnConfetti(), i * 5);
        }
        setTimeout(() => {
            window.location.href = "site_romantico.html";
        }, 1200);
    } else {
        alert("Acabámos");
    }
}

function spawnConfetti() {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.top = "-10px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.width = "8px";
    c.style.height = "14px";
    c.style.background = `hsl(${Math.random()*360}, 100%, 60%)`;
    c.style.opacity = "0.9";
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    c.style.animation = "confettiFall 1.2s linear forwards";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2000);
}