const photoMessages = {
  "images/photo1.jpg": "20/09",
  "images/photo2.jpg": "08/08",
  "images/photo3.jpg": "22/03",
  "images/photo4.jpg": "03/02"
};

const audio = document.getElementById('music');
let playing = true;
function playMusic() {
    audio.volume = 0.55;
    audio.play().then(() => {
        playing = true;
        document.getElementById('toggleMusic').textContent = 'Pausar Música';
    }).catch(() => {
        playing = false;
        document.getElementById('toggleMusic').textContent = 'Tocar Música';
    });
}
playMusic();

document.getElementById('toggleMusic').addEventListener('click', () => {
    if (playing) {
        audio.pause();
        playing = false;
        document.getElementById('toggleMusic').textContent = 'Tocar Música';
    } else {
        playMusic();
    }
});

document.body.addEventListener('click', () => { if (!playing) playMusic(); }, { once: true });


const thumbs = document.getElementById('thumbs');
const surprise = document.getElementById('surprise');
const surpriseTitle = document.getElementById('surpriseTitle');
const surpriseText = document.getElementById('surpriseText');
const closeSurpriseBtn = document.getElementById('closeSurprise');
const viewGalleryBtn = document.getElementById('viewGallery');

thumbs.addEventListener('click', (e) => {
    const t = e.target.closest('.thumb');
    if (!t) return;
    const src = t.dataset.src || t.querySelector('img').src;


    surprise.classList.add('show');


    surpriseTitle.textContent = photoMessages[src] || "Memória bonita 📸";


    surpriseText.innerHTML = `
        <img src="${src}" 
             style="max-width:100%;border-radius:10px;display:block;margin:12px auto">
    `;
});

function closeSurprise() {
    surprise.classList.remove('show');
}




closeSurpriseBtn.addEventListener('click', closeSurprise);

// Fecha se clicares fora da caixa do modal
surprise.addEventListener('click', (e) => {
    if (e.target === surprise) {
        closeSurprise();
    }
});


viewGalleryBtn.addEventListener('click', () => {

    surpriseTitle.textContent = 'Galeria de memórias';


    const galleryHtml = `
        <div id="fullGallery" 
             style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:12px">
            ${Object.keys(photoMessages).map(src => `
                <img class="gallery-photo" 
                     data-src="${src}" 
                     src="${src}" 
                     style="width:100%;height:100px;object-fit:cover;border-radius:8px;cursor:pointer">
            `).join('')}
        </div>
        <div style="margin-top:12px;color:var(--muted);text-align:center">
            Clica numa foto para veres em grande ❤️<br>
        </div>
    `;

    surpriseText.innerHTML = galleryHtml;


    document.querySelectorAll('.gallery-photo').forEach(img => {
        img.addEventListener('click', () => {
            const src = img.dataset.src;


            surpriseTitle.textContent = photoMessages[src] || 'Memória bonita 📸';

            surpriseText.innerHTML = `
                <img src="${src}" 
                     style="max-width:100%;border-radius:10px;display:block;margin:12px auto">
            `;
        });
    });
});

function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'heart';
    el.textContent = Math.random() > 0.5 ? '💖' : '❤️';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (12 + Math.random() * 28) + 'px';
    el.style.animationDuration = (4 + Math.random() * 5) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 9000);
}
setInterval(spawnHeart, 350);

const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let confettiRunning = false;
function resizeCanvas() { confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function rand(min, max) { return Math.random() * (max - min) + min; }
function initConfetti() { 
    confettiPieces = []; 
    for (let i = 0; i < 120; i++) { 
        confettiPieces.push({ 
            x: rand(0, confettiCanvas.width), 
            y: rand(-confettiCanvas.height, 0), 
            r: rand(6, 12), 
            d: rand(10, 30), 
            color: `hsl(${rand(330, 360)},70%,60%)` 
        }); 
    } 
}
function drawConfetti() { 
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); 
    for (const p of confettiPieces) { 
        ctx.fillStyle = p.color; 
        ctx.beginPath(); 
        ctx.ellipse(p.x, p.y, p.r, p.r * 0.6, Math.PI / 6, 0, Math.PI * 2); 
        ctx.fill(); 
        p.y += 2 + Math.sin(p.d / 10); 
        p.x += Math.sin(p.d); 
        if (p.y > confettiCanvas.height + 20) { 
            p.y = rand(-100, -10); 
            p.x = rand(0, confettiCanvas.width); 
        } 
    } 
}
let confettiTimer = null;
function startConfetti() { 
    if (confettiRunning) return; 
    confettiRunning = true; 
    initConfetti(); 
    confettiTimer = setInterval(drawConfetti, 30); 
}
function stopConfetti() { 
    confettiRunning = false; 
    if (confettiTimer) clearInterval(confettiTimer); 
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); 
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'm') document.getElementById('toggleMusic').click();
});


const playSmall = document.getElementById('playSmall');
let pulse = true;
setInterval(() => { 
    playSmall.style.transform = pulse ? 'scale(1.06)' : 'scale(0.96)'; 
    pulse = !pulse; 
}, 650);


const closeSurpriseX = document.getElementById('closeSurpriseX');
if (closeSurpriseX) {
    closeSurpriseX.addEventListener('click', closeSurprise);
}



const gift = document.getElementById('openGift');

gift.addEventListener('click', () => {
    // Efeito de zoom antes de trocar de página
    gift.style.transition = "transform 0.4s ease";
    gift.style.transform = "scale(1.4) rotate(-3deg)";

    setTimeout(() => {
        window.location.href = "surpresa.html"; 
    }, 450);
});
