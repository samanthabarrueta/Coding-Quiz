$(document).ready(function () {
var quizQuestions = [
  {
  question: 'What color is the sky?',
  options: ['green ', 'blue ', 'pink'],
  answer:"blue",
  },
  {
  question: 'Who was the first president of USA?',
  options:['george washington', 'George Bush ','Abraham Lincoln'],
  answer: 'george washington',
  },
  {
  question: 'Who wrote "purple rain"?',
  options:['Beyonce ', 'Chris Pratt ', 'Prince'],
  answer: 'Prince',
  },
  {
  question: 'Who was the first person to walk on the moon?',
  options:['amelia Earhart ', 'neal armstrong ', 'michael jackson'],
  answer: 'michael jackson',
  },
  {
  question: 'When did WWII end?',
  options:['1945 ', '1920 ', '2010'],
  answer: '1945',
  }
];

// var createQuiz = function(currentQuestion){

//     for(var i= 0; i <= currentQuestion; i++){
//      currentQuestion++;
    
//     if(quizQuestions.length !== 0){
//   var nextQuestion = quizQuestions.shift();
//     console.log(nextQuestion.çurrentOptions())
//   }
//   }
// }

//createQuiz(currentQuestion);



var currentOptions = function() {
  for(var i =0; i < quizQuestions[i].options.length; i++){
    console.log(quizQuestions[currentQuestion].options[i]);
   }
}
var askQuestion = function(){
  console.log(quizQuestions[currentQuestion].question);
}

var checkAnswer = function() {
  var score = 0;

  if (quizQuestions.options=== quizQuestions.answer) {
    alert('Correct');
    score++;
  } else {
  (quizQuestions.options !== quizQuestions.answer)
  alert('Incorrect');
  }
}


var runQuiz = function(){
  var currentQuestion = 0;
  askQuestion();
  currentOptions();
  checkAnswer();
  currentQuestion++;
}

});

runQuiz();
