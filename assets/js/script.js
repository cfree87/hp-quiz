const quizData = [
  {
      question: "Who gave Harry the gillyweed in book 4?",
      a: "Dobby",
      b: "Professor Sprout",
      c: "Neville Longbottom",
      d: "Madeye Moody",
      correct: "a",
  },
  {
    question: "Who gave Hagrid the flying motorbike?",
      a: "Hagrid made the motorbike himself",
      b: "Professor Dumbledore",
      c: "Sirus Black",
      d: "Arthur Weasley",
      correct: "c",
  },
  {
    question: "How many goalposts are there in quidditch?",
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      correct: "c",
  },
  {
    question: "Who did a member of the black family leave a horcrux with?",
      a: "Bellatrix Lestrange",
      b: "Kreacher",
      c: "Professor Dumbledore",
      d: "Lucius Malfoy",
      correct: "a",
  }
];

const quiz = document.getElementById('quiz');
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
  
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz]; 

  questionE1.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d

}

function deselectAnswers() {
answerE1s.forEach(answerE1 => answerE1.checked = false);
}

function getSelected() {
    let answerE1s;
    answerE1s.forEach(answerE1 => {
      if (answerE1.checked) {
        answer = answerE1.id
      }
    })
    return answer;
}