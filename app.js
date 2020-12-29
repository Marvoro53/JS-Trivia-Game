
(function(){
  function buildQuiz(){
    // Variable to store the HTML output
    const output = [];

    // For each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // Variable to store the list of possible answers
        const answers = [];

        // For each available answer...
        for(letter in currentQuestion.answers){

          // Add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // Add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // Combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // Gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // Keep track of user's answers
    let numCorrect = 0;

    // For each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // Find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // If answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // Add to the number of correct answers
        numCorrect++;

        // Colors the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // If answer is wrong or blank
      else{
        // Color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // Show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

//Questions
const myQuestions = [
    {
      question: "Who invented Football (American)?",
      answers: {
        a: "Walter Camp",
        b: "Ron Rivera",
        c: "Pete Carroll"
      },
      correctAnswer: "c"
    },
    {
      question: "What team won 3 Super Bowls in the 1990's?",
      answers: {
        a: "Steelers",
        b: "Patriots",
        c: "Broncos"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the couch that lead the Broncos to first Super Bowl?",
      answers: {
        a: "Red Miller",
        b: "Bill Belichick",
        c: "Sean Payton",
        d: "Andy Reid"
      },
      correctAnswer: "d"
    }
  ];