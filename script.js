// Funkcja do losowania pytań
function getRandomQuestions(allQuestions, count) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderQuiz(data, container, isRandom = true) {
  // Sprawdź czy kontener istnieje
  if (!container) {
    console.error("Container not found");
    return;
  }

  // Przyciski sterujące na górze
  const controlsHtml = `
    <div class="quiz-controls">
      ${isRandom ? '<button id="show-all-btn">Pokaż wszystkie pytania</button>' : ''}
      <button id="randomize-btn" class="randomize-btn">Losuj 21 pytań</button>
      <button class="check-all-btn">Sprawdź wszystkie odpowiedzi</button>
    </div>
  `;

  // Pytania
  const questionsHtml = data.map((q, i) => `
    <div class="question-block" data-question-id="${i}">
      <p><strong>${i + 1}. ${q.question}</strong></p>
      ${Object.entries(q.answers).map(
        ([key, value]) => `<label>
          <input type="radio" name="q${i}" value="${key}"> ${key}) ${value}
        </label><br>`
      ).join("")}
      <button class="check-single-btn" data-index="${i}">Sprawdź tę odpowiedź</button>
      <div class="single-result" id="result-${i}"></div>
    </div>
  `).join("");

  // Przyciski sterujące na dole
  const bottomControlsHtml = `
    <div class="quiz-controls bottom-controls">
      <button id="randomize-btn-bottom" class="randomize-btn">Losuj 21 pytań</button>
      <button class="check-all-btn">Sprawdź wszystkie odpowiedzi</button>
    </div>
  `;

  container.innerHTML = controlsHtml + questionsHtml + bottomControlsHtml;

  // Event listeners dla przycisków
  document.getElementById('show-all-btn')?.addEventListener('click', () => {
    renderQuiz(quizData, quizContainer, false);
    if (resultsContainer) resultsContainer.innerHTML = '';
  });

  // Obsługa przycisków "Losuj 21 pytań"
  document.querySelectorAll('.randomize-btn').forEach(button => {
    button.addEventListener('click', () => {
      const randomQuestions = getRandomQuestions(quizData, 21);
      renderQuiz(randomQuestions, quizContainer, true);
      if (resultsContainer) resultsContainer.innerHTML = '';

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Sprawdzanie odpowiedzi
  document.querySelectorAll('.check-all-btn').forEach(button => {
    button.addEventListener('click', () => {
      showResults(data, quizContainer, resultsContainer);
    });
  });

  document.querySelectorAll('.check-single-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      checkSingleQuestion(data[index], index);
    });
  });
}

function checkSingleQuestion(question, index) {
  const resultDiv = document.getElementById(`result-${index}`);
  if (!resultDiv) return;

  const selected = document.querySelector(`input[name="q${index}"]:checked`);
  
  if (!selected) {
    resultDiv.innerHTML = '<p style="color:orange;">Proszę wybrać odpowiedź</p>';
    return;
  }

  const answer = selected.value;
  
  if (answer === question.correctAnswer) {
    resultDiv.innerHTML = `<p style="color:green;">✅ Poprawnie! ${question.explanation}</p>`;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">❌ Błąd! Poprawna odpowiedź: ${question.correctAnswer}) ${question.answers[question.correctAnswer]}</p>
                          <p>${question.explanation}</p>`;
  }
}

function showResults(data, quizContainer, resultsContainer) {
  if (!quizContainer || !resultsContainer) return;

  const blocks = quizContainer.querySelectorAll('.question-block');
  let score = 0;
  let allAnswered = true;

  // Sprawdź odpowiedzi
  data.forEach((q, i) => {
    const selected = blocks[i]?.querySelector(`input[name="q${i}"]:checked`);
    const answer = selected ? selected.value : null;
    const result = document.createElement("div");

    if (!selected) {
      allAnswered = false;
      result.innerHTML = `<p style="color:orange;">${i + 1}. Nie udzielono odpowiedzi</p>`;
    } 
    else if (answer === q.correctAnswer) {
      score++;
      result.innerHTML = `<p style="color:green;">${i + 1}. ✅ ${q.explanation}</p>`;
    } else {
      result.innerHTML = `<p style="color:red;">${i + 1}. ❌ Poprawna: ${q.correctAnswer}) ${q.answers[q.correctAnswer]}<br>${q.explanation}</p>`;
    }
    blocks[i]?.appendChild(result);
  });

  if (!allAnswered) {
    resultsContainer.innerHTML = `<h2 style="color: orange;">Proszę odpowiedzieć na wszystkie pytania!</h2>`;
    return;
  }

  const percentage = (score / data.length) * 100;
  const passed = percentage >= 60;
  
  let resultMessage = `<h2>Twój wynik: ${score}/${data.length} (${percentage.toFixed(1)}%)</h2>`;
  
  if (passed) {
    resultMessage += `
      <div style="color: green; font-weight: bold; padding: 10px; border: 2px solid green; border-radius: 5px; margin-top: 10px;">
        Gratulacje! Zdałeś test (wymagane minimum 60%)
      </div>
    `;
  } else {
    resultMessage += `
      <div style="color: red; font-weight: bold; padding: 10px; border: 2px solid red; border-radius: 5px; margin-top: 10px;">
        Niestety nie zdałeś. Wymagane minimum 60% poprawnych odpowiedzi.
        <br>Brakuje Ci ${Math.ceil(data.length * 0.6 - score)} punktów do zaliczenia.
      </div>
    `;
  }

  resultsContainer.innerHTML = resultMessage;
}

// Inicjalizacja quizu
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

if (quizContainer && resultsContainer) {
  // Początkowo załaduj losowe 21 pytań
  const initialQuestions = getRandomQuestions(quizData, 21);
  renderQuiz(initialQuestions, quizContainer, true);
} else {
  console.error("Brak wymaganych elementów w DOM");
}