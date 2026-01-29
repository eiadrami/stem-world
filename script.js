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
});// 30 سؤال إنجليزي متدرجة من A1 → C2
const questions = [
  { text: "1. Choose the correct sentence:", options: ["He go to school every day.", "He goes to school every day.", "He going to school every day."], answer: 1 },
  { text: "2. Fill in the blank: 'She ___ reading a book.'", options: ["are", "is", "am"], answer: 1 },
  { text: "3. What is the opposite of 'Hot'?", options: ["Cold", "Warm", "Heat"], answer: 0 },
  { text: "4. Which word is a noun?", options: ["Run", "Teacher", "Beautiful"], answer: 1 },
  { text: "5. Choose the correct plural:", options: ["Childs", "Children", "Childes"], answer: 1 },
  { text: "6. What is the synonym of 'Happy'?", options: ["Joyful", "Angry", "Sad"], answer: 0 },
  { text: "7. Choose the correct tense: 'I ___ my homework yesterday.'", options: ["do", "did", "done"], answer: 1 },
  { text: "8. Fill in the blank: 'If I ___ rich, I would travel the world.'", options: ["am", "were", "was"], answer: 1 },
  { text: "9. Which sentence is correct?", options: ["She don’t like pizza.", "She doesn’t like pizza.", "She not like pizza."], answer: 1 },
  { text: "10. What is the opposite of 'Success'?", options: ["Failure", "Win", "Progress"], answer: 0 },
  { text: "11. Choose the correct word: 'He is interested ___ science.'", options: ["on", "in", "at"], answer: 1 },
  { text: "12. Which is a phrasal verb?", options: ["Look after", "Run fast", "Eat food"], answer: 0 },
  { text: "13. Fill in the blank: 'By the time we arrived, the movie ___.'", options: ["started", "had started", "starts"], answer: 1 },
  { text: "14. Which sentence uses passive voice?", options: ["The teacher explained the lesson.", "The lesson was explained by the teacher.", "The teacher is explaining the lesson."], answer: 1 },
  { text: "15. What is the synonym of 'Important'?", options: ["Necessary", "Funny", "Small"], answer: 0 },
  { text: "16. Choose the correct idiom: 'It’s raining ___.'", options: ["cats and dogs", "lions and tigers", "birds and bees"], answer: 0 },
  { text: "17. Which word means 'to make something worse'?", options: ["Exacerbate", "Improve", "Simplify"], answer: 0 },
  { text: "18. Fill in the blank: 'Hardly ___ I entered the room when the phone rang.'", options: ["had", "have", "was"], answer: 0 },
  { text: "19. Which sentence is correct?", options: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither answers correct."], answer: 1 },
  { text: "20. What is the synonym of 'Meticulous'?", options: ["Careful", "Lazy", "Quick"], answer: 0 },
  { text: "21. Which is an advanced collocation?", options: ["Strong coffee", "Heavy coffee", "Big coffee"], answer: 0 },
  { text: "22. Fill in the blank: 'Had I known, I ___ helped you.'", options: ["would have", "will", "would"], answer: 0 },
  { text: "23. Which sentence uses subjunctive mood?", options: ["I suggest that he study harder.", "He studies harder.", "He is studying harder."], answer: 0 },
  { text: "24. What is the opposite of 'Scarcity'?", options: ["Abundance", "Poverty", "Lack"], answer: 0 },
  { text: "25. Which is an advanced synonym of 'Begin'?", options: ["Commence", "Stop", "End"], answer: 0 },
  { text: "26. Fill in the blank: 'No sooner ___ the train left than it started raining.'", options: ["had", "has", "was"], answer: 0 },
  { text: "27. Which sentence is grammatically correct?", options: ["He insisted that she be present.", "He insisted that she is present.", "He insisted she present."], answer: 0 },
  { text: "28. What is the synonym of 'Ubiquitous'?", options: ["Everywhere", "Rare", "Hidden"], answer: 0 },
  { text: "29. Which idiom means 'to reveal a secret'?", options: ["Spill the beans", "Break the ice", "Hit the sack"], answer: 0 },
  { text: "30. Fill in the blank: 'The book, ___ I borrowed from the library, was fascinating.'", options: ["which", "whom", "what"], answer: 0 }
];

// عرض الأسئلة ديناميك
const quizContainer = document.getElementById("quiz");
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<h3>${q.text}</h3>` +
    q.options.map((opt, j) =>
      `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`
    ).join("");
  quizContainer.appendChild(div);
});

// حساب النتيجة + المستوى
function checkAnswers() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if(selected && parseInt(selected.value) === q.answer) score++;
  });

  const percentage = (score / questions.length) * 100;
  let level = "";
  if (percentage <= 20) level = "A1 (Beginner)";
  else if (percentage <= 40) level = "A2 (Elementary)";
  else if (percentage <= 60) level = "B1 (Intermediate)";
  else if (percentage <= 80) level = "B2 (Upper Intermediate)";
  else if (percentage <= 90) level = "C1 (Advanced)";
  else level = "C2 (Proficient)";

  document.getElementById("result").textContent =