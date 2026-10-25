const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

const pawBtn = document.getElementById("pawBtn");
const secretResult = document.getElementById("secretResult");

const heartsContainer = document.getElementById("hearts");

// Кнопка-сюрприз
surpriseBtn.addEventListener("click", () => {
  surpriseMessage.classList.toggle("hidden");

  if (surpriseMessage.classList.contains("hidden")) {
    surpriseBtn.textContent = "Відкрити сюрприз ❤️";
  } else {
    surpriseBtn.textContent = "Сховати сюрприз ♥";
    createHearts(18);
  }
});

// Секретне послання з ГАВ
pawBtn.addEventListener("click", () => {
  secretResult.classList.toggle("hidden");

  if (!secretResult.classList.contains("hidden")) {
    pawBtn.textContent = "❤️";
    createHearts(12);
  } else {
    pawBtn.textContent = "🐾";
  }
});

// Створення сердечок
function createHearts(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "❤";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

// Періодично запускаємо сердечка на фоні
setInterval(() => {
  createHearts(2);
}, 900);