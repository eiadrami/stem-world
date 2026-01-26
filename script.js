// ==========================
// 1. تأثير الكتابة (Typing Effect)
// ==========================
const text = "Welcome to STEM WORLD";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// ==========================
// 2. Flip Animation للكروت
// ==========================
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// ==========================
// 3. Scroll Animations
// ==========================
const elements = document.querySelectorAll('.card, .contact-card');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// ==========================
// 4. Dark/Light Mode Toggle
// ==========================
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}// Flip Animation للكروت
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});document.querySelectorAll('.card').forEach(card => {
  if (!card.classList.contains('journal-card')) {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }
});