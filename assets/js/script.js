
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });

const myQuestions = [
    {
      question: "Who gave Harry the Gillyweed in book 4?",
      answers: {
        a: "Dobby",
        b: "Neville Longbottom",
        c: "Hermione Granger",
        d: "Professor Sprout",
      },
        correctAnswer: "a",
    },
    {
        question: "Who was given a horcrux by a Black?",
        answers: {
          a: "Kreacher",
          b: "Bellatrix Lestrange",
          c: "Mundungus Fletcher",
          d: "Professor Dumbledore",
        },
        correctAnswer: "a"
      },
      {
        question: "How many goal posts are in quidditch?",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
        },
        correctAnswer: "c"
      },
      {
        question: "Who gave Hagrid his flying motorbike?",
        answers: {
          a: "Hagrid made it",
          b: "Sirius Black",
          c: "Arthur Weasley",
          d: "Professor Dumbledore",
        },
        correctAnswer: "b"
      }
    ]

    output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );