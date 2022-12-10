export class UI {
  showQuestion(text) {
    const questionTitle = document.getElementById('question');
    questionTitle.innerText = text;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement('button');
      button.innerText = choices[i];
      button.className = 'button';
      button.addEventListener('click', () => callback(choices[i]));
      choicesContainer.append(button);
    }
  }

  showScore(score) {
    const quizEndHtml = `
      <h1>Result</h1>
      <h2>Your final score is: ${score}</h2>
      <a href="javascript:location.reload()"><h3>Try Again</h3></a>
    `;
    const element = document.getElementById('quiz');
    element.innerHTML = quizEndHtml;
  }

  showProgress(currentIndex, total) {
    const element = document.getElementById('progress');
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
