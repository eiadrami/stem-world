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
});document.querySelectorAll('.card').forEach(card => {
  if (!card.tagName.includes('A')) {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }
});document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 200); // يدخلوا واحد ورا التاني
  });
});const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode", document.body.classList.contains("dark") ? "dark" : "light");
});

// عند فتح الصفحة
if(localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});document.querySelectorAll(".card a").forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("lastLesson", link.textContent);
  });
});

window.onload = () => {
  const last = localStorage.getItem("lastLesson");
  if(last) alert("آخر درس فتحته: " + last);
};