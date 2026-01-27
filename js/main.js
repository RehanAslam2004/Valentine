// ============================================
// HOME PAGE - YES/NO BUTTON FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  let yesScale = 1;
  let noScale = 1;
  let clickCount = 0;

  // Yes Button - Grows when hovered and clicked
  if (yesBtn) {
    yesBtn.addEventListener('mouseenter', function() {
      yesScale += 0.1;
      yesBtn.style.transform = `scale(${yesScale})`;
    });

    yesBtn.addEventListener('click', function() {
      // Create floating hearts
      createHearts();
      
      // Redirect after animation
      setTimeout(() => {
        window.location.href = 'story.html';
      }, 1500);
    });
  }

  // No Button - Shrinks each click
  if (noBtn) {
    noBtn.addEventListener('click', function() {
      clickCount++;
      noScale = Math.max(0.4, noScale - 0.15); // Minimum scale 0.4
      noBtn.style.transform = `scale(${noScale})`;

      // Fun message after multiple clicks
      if (clickCount === 3) {
        alert('Why do you keep clicking? 😢');
      } else if (clickCount === 5) {
        alert('Please say YES! 🥺💕');
      } else if (clickCount > 7) {
        alert('Fine... the button disappeared! 😂');
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
      }
    });
  }
});

// ============================================
// FLOATING HEARTS ANIMATION
// ============================================

function createHearts() {
  const heartsContainer = document.getElementById('hearts-container');
  
  // Create multiple hearts
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '💗';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    
    // Random animation duration
    const duration = 3 + Math.random() * 2;
    heart.style.animation = `floatUp ${duration}s ease-in-out forwards`;
    
    if (heartsContainer) {
      heartsContainer.appendChild(heart);
    } else {
      document.body.appendChild(heart);
    }
    
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}

// ============================================
// MESSAGES PAGE - LOVE LETTER INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const loveLetters = document.querySelectorAll('.love-letter');
  
  loveLetters.forEach((letter, index) => {
    // Hover interaction
    letter.addEventListener('mouseenter', function() {
      // Subtle sound effect (optional)
      // playSound();
    });

    // Click interaction - Create multiple hearts
    letter.addEventListener('click', function(e) {
      createLetterHearts(e.clientX, e.clientY);
    });

    // Add slight random rotation on load for natural scattered look
    const randomRotation = (Math.random() - 0.5) * 4;
    letter.style.setProperty('--rotation', randomRotation + 'deg');
  });

  // Create hearts specific to love letters
  function createLetterHearts(x, y) {
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '💌';
      heart.style.position = 'fixed';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      heart.style.fontSize = Math.random() * 20 + 12 + 'px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9999';
      
      // Random angle spread
      const angle = (Math.PI * 2 * i) / 8;
      const velocity = 3 + Math.random() * 3;
      const tx = Math.cos(angle) * velocity * 80;
      const ty = Math.sin(angle) * velocity * 80 - 100;
      const duration = 1 + Math.random() * 1.5;
      
      heart.style.animation = `none`;
      document.body.appendChild(heart);
      
      let progress = 0;
      const startTime = Date.now();
      
      const animate = () => {
        progress = (Date.now() - startTime) / (duration * 1000);
        if (progress < 1) {
          const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out
          heart.style.transform = `translate(${tx * easeProgress}px, ${ty * easeProgress}px) scale(${1 - progress * 0.3})`;
          heart.style.opacity = 1 - progress;
          requestAnimationFrame(animate);
        } else {
          heart.remove();
        }
      };
      animate();
    }
  }
});

// ============================================
// OLD MESSAGES PAGE - CARD INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Add visual feedback
      this.style.background = 'linear-gradient(135deg, #ffb6d5, #ff4d88)';
      this.style.color = 'white';
      
      // Reset after delay
      setTimeout(() => {
        this.style.background = '';
        this.style.color = '';
      }, 500);
    });
  });
});

// ============================================
// GALLERY PAGE - IMAGE INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Create hearts on image click
      createHearts();
    });
  });
});

// ============================================
// SURPRISE PAGE - GIFT BOX FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const surpriseBox = document.getElementById('surpriseBox');
  const hiddenMessage = document.getElementById('hiddenMessage');

  if (surpriseBox) {
    surpriseBox.addEventListener('click', function() {
      // Hide the box
      surpriseBox.style.display = 'none';

      // Show the hidden message with animation
      hiddenMessage.style.display = 'block';
      hiddenMessage.classList.add('show');

      // Launch hearts animation
      createHearts();

      // Optional: Play sound (uncomment if you add an audio file)
      // playSound();
    });
  }
});

// ============================================
// OPTIONAL: SOUND EFFECT FUNCTION
// ============================================

function playSound() {
  // Create a simple beep sound using Web Audio API
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = 'sine';

  gain.gain.setValueAtTime(0.3, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', function() {
  // Add any page-wide animations on load
  document.body.style.opacity = '1';
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

