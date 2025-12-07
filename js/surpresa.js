document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openLetter');
  const modal = document.getElementById('letterModal');
  const closeBtn = document.getElementById('closeLetter');

  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2023-12-09T00:00:00'); 

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateCounter();
  setInterval(updateCounter, 1000);
});

function toggleLetter() {
  const content = document.getElementById('letterContent');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.getElementById('heartContainer').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 800);

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  music.volume = 0; // começa silenciosa

  function fadeIn(audio) {
    let vol = 0;
    audio.play();
    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = Math.min(vol, 1);
      } else {
        clearInterval(interval);
      }
    }, 200);
  }

  // inicia fade-in na primeira interação
  document.body.addEventListener('click', () => fadeIn(music), { once: true });
  document.body.addEventListener('scroll', () => fadeIn(music), { once: true });
});


document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('toggleMusic');

  // Função para fade-in
  function fadeIn(audio) {
    audio.volume = 0;
    audio.play();
    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = Math.min(vol, 1);
      } else {
        clearInterval(interval);
      }
    }, 200); // aumenta suavemente a cada 0.2s
  }

  // Função para fade-out
  function fadeOut(audio) {
    let vol = audio.volume;
    const interval = setInterval(() => {
      if (vol > 0) {
        vol -= 0.05;
        audio.volume = Math.max(vol, 0);
      } else {
        clearInterval(interval);
        audio.pause();
      }
    }, 200); // diminui suavemente a cada 0.2s
  }

  toggleBtn.addEventListener('click', () => {
    if (music.paused) {
      fadeIn(music);
      toggleBtn.textContent = "🔇 Música Off";
    } else {
      fadeOut(music);
      toggleBtn.textContent = "🎵 Música On";
    }
  });
});




