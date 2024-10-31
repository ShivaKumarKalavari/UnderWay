// Sample questions data
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"]
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"]
    }
  ];
  
  let currentQuestionIndex = 0;
  let timeLeft = 30; // seconds
  let timerInterval;
  
  // Load the first question when the page loads
  window.onload = function() {
    loadQuestion();
    startTimer();
  };
  
  // Load question and options dynamically
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    
    // Clear previous options
    optionsContainer.innerHTML = "";
    
    // Display the question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Display options
    currentQuestion.options.forEach(option => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.classList.add("option");
      optionsContainer.appendChild(optionButton);
    });
    
    // Update navigation buttons
    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
    document.getElementById("next-btn").disabled = currentQuestionIndex === questions.length - 1;
  }
  
  // Timer countdown function
  function startTimer() {
    timerInterval = setInterval(function() {
      if (timeLeft <= 0) {
        nextQuestion(); // Automatically go to next question when time runs out
      } else {
        document.getElementById("time").textContent = timeLeft;
        timeLeft--;
      }
    }, 1000);
  }
  
  // Reset the timer for each question
  function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 30; // Reset time
    startTimer();
  }
  
  // Move to the previous question
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
      resetTimer();
    }
  }
  
  // Move to the next question
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
      resetTimer();
    } else {
      clearInterval(timerInterval); // Stop timer when quiz ends
      alert("Quiz Completed!");
    }
  }
  