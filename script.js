let questions = [
    "Have you ever lied to a friend? / Drink 1 cup",
    "What is your biggest fear? / Drink 1 cup",
    "Sing a song out loud.  / Drink 1 cup",
    "Do 10 jumping jacks. / Drink 1 cup",
    "Tell a joke.  / Drink 1 cup",
    "Name 5 cities in 10 seconds.  / Drink 1 cup",
    "What is your favorite food?  / Drink 1 cup",
    // Add more questions here
  ];
  
  let questionCount = questions.length;
  
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const countElement = document.getElementById("count");
    
    if (questions.length === 0) {
      questionElement.textContent = "No more questions!";
      countElement.textContent = "Total questions: 0";
    } else {
      const randomQuestion = getRandomQuestion();
      questionElement.textContent = randomQuestion;
      const questionIndex = questions.indexOf(randomQuestion);
      questions.splice(questionIndex, 1);
      questionCount--;
      countElement.textContent = `Total questions: ${questionCount}`;
    }
  }
  
  function handleDrawClick() {
    displayQuestion();
  }
  
  document.getElementById("Draw").addEventListener("click", handleDrawClick);
  
  // Call displayQuestion() when the page loads
  window.onload = function() {
    displayQuestion();
  };
  