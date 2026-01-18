function calculateScore() {

    const answers = {
        q1: "a", q2: "b", q3: "c", q4: "b", q5: "c",
        q6: "b", q7: "a", q8: "c", q9: "b", q10: "a"
    };

    const answersText = {
        q1: "Hyper Text Markup Language",
        q2: "CSS",
        q3: "object",
        q4: "# (hashtag/pound)",
        q5: "git push",
        q6: "HTTPS",
        q7: "Databases",
        q8: "Meta (Facebook)",
        q9: "MongoDB",
        q10: "Application Programming Interface"
    };

    let score = 0;
    const form = document.getElementById("quiz-form");
    const cards = document.querySelectorAll(".question-card");

    cards.forEach((card, index) => {

        const qName = "q" + (index + 1);
        const selected = form.querySelector(`input[name="${qName}"]:checked`);

        // Cleaning previous feedback
        card.classList.remove("correct", "wrong");
        const oldFeedback = card.querySelector(".answer-feedback");
        if (oldFeedback) oldFeedback.remove();

        const feedback = document.createElement("div");
        feedback.classList.add("answer-feedback");

        if (selected && selected.value === answers[qName]) {
            score++;
            card.classList.add("correct");
            feedback.classList.add("correct");
            feedback.textContent = "✔ Correct answer";
        } else {
            card.classList.add("wrong");
            feedback.classList.add("wrong");
            feedback.innerHTML = `✘ Incorrect — Correct answer: <em>${answersText[qName]}</em>`;
        }

        card.appendChild(feedback);
    });

    // Global Result
    document.getElementById("score-display").innerText = score;
    document.getElementById("result-area").style.display = "block";

    // Hide form after submission to focus on results (Optional)
    // form.style.display = "none";

    const feedbackMsg = document.getElementById('feedback-message');
    if (score >= 8) {
        feedbackMsg.innerText = "Excellent! You are a pro.";
    } else if (score >= 5) {
        feedbackMsg.innerText = "Not bad, but you can do better.";
    } else {
        feedbackMsg.innerText = "Time to review your lessons at IIT!";
    }

    // Smooth scroll to the top to see the score
    window.scrollTo({ top: 0, behavior: "smooth" });
}
















const cards = document.querySelectorAll(".testimonial-card");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove("active");
    });
    cards[index].classList.add("active");
}

leftBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = cards.length - 1;
    showCard(currentIndex);
});

rightBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= cards.length) currentIndex = 0;
    showCard(currentIndex);
});

// afficher la première carte
showCard(currentIndex);





