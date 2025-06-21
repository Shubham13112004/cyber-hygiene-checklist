function calculatescore(){
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const checkbox = document.getElementById("q" + i);
    if (checkbox.checked) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.style.opacity = "1";

  if (score === 5) {
    result.textContent = "✅ Excellent Cyber Hygiene! You’re doing great.";
    result.style.color = "#007700";
  } else if (score >= 3) {
    result.textContent = "🙂 Good, but you can improve your online safety.";
    result.style.color = "#cc7a00";
  } else {
    result.textContent = "⚠️ Needs improvement! Please follow better cybersecurity habits.";
    result.style.color = "#cc0000";
  }
}
