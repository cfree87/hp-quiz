const quizData = [
    {
      question: "Who gave Harry the Gillyweed in book four?",
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
    question: "Who did a member of the Black family leave a horcrux with?",
      a: "Bellatrix Lestrange",
      b: "Kreacher",
      c: "Professor Dumbledore",
      d: "Lucius Malfoy",
      correct: "b",
  },
{
    question: "What was the name of Voldemort's orphanage?",
    a: "Lamb's Rest",
    b: "Maggie's Home",
    c: "Angel's Haven",
    d: "Wool's Orphanage",
    correct: "d",
},
{
  question: "How did Harry lose his wand during the Quidditch World Cup?",
    a: "Harry dropped it",
    b: "Barty Crouch Jr. stole it",
    c: "Winky stole it",
    d: "He never lost it",
    correct: "b",
},
{
  question: "How many horcruxes did Voldemort create?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "b",
},
{
  question: "What is the name of Harry Potter's godchild",
    a: "Percival Lupin",
    b: "Teddy Lupin",
    c: "Tommy Lupin",
    d: "Timothy Lupin",
    correct: "b",
},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

var count = 80;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
    window.reload
  }
}, 1000);

