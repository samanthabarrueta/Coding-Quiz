$(document).ready(function() {
    
    var quizQuestions = [
        {
            question: 'Which of the following is NOT a fundamental programming language?',
            options: ['javaScript', 'functions', 'CSS'],
            answer: 'functions',
        },
        {
            question: 'Who can see a console.log?',
            options: ['the user', 'the developer', 'the dog'],
            answer: 'the developer',
        },
        {
            question: 'Which of the following is NOT a comparison operator?',
            options: ['===', '<=', '++'],
            answer: '++',
        },
        {
            question: 'Which types of collections can be added to an array?',
            options: ['strings and numbers', 'objects and booleans', 'all of the above'],
            answer: 'all of the above',
        },
        {
            question: 'Each element in an array is identified by it\'s _______?',
            options: ['loop', 'index', 'keyword'],
            answer: 'index',
        },
        {
            question: 'Which of the following can be used to check conditions?',
            options: ['if/else statements', 'functions', 'loops'],
            answer: 'if/else statements',
        },
        {
            question: 'Where do we use parameters and arguments?',
            options: ['in loops', 'in objects', 'in functions'],
            answer: 'in functions',
        },
        {
            question: 'Which of the following does NOT create a pop up on the screen for the user?',
            options: ['prompt()', 'console.log()', 'confirm()'],
            answer: 'console.log()',
        },
        {
            question: 'At what index does an array begin?',
            options: ['0', '5', '1'],
            answer: '0',
        },
        {
            question: 'Which of the following is NOT a primitive data type?',
            options: ['string', 'loop', 'boolean'],
            answer: 'loop',
        },
    ];

    var quizOptions = function(){
        for (var i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
            $('#quizOptions').append(`<ul style="list-style-type:none;""><li><button class="btn btn-dark" value="${quizQuestions[currentQuestion].options[i]}" id="option"> ${quizQuestions[currentQuestion].options[i]} </button></li></ul>`);
            console.log(quizQuestions[currentQuestion].options[i]); 
        }
    }

    var startQuiz = function(){
        $('#startButton').on('click', function(){
            currentQuestion = 0;
            $('#quizQuestions').html(quizQuestions[currentQuestion].question);
            quizOptions();
        });
    }
     
    startQuiz();


    var nextQuestion = function(){
        $('#nextButton').on('click', function(){
            currentQuestion++;
            $('#quizQuestions').html(quizQuestions[currentQuestion].question);
            $('#quizOptions').empty();
            quizOptions();
        });
    }

    nextQuestion();

    var checkAnswer = function(){
        $(document).on('click','#option',function(){
        var userChoice = $(this).val();
            if (userChoice === (quizQuestions[currentQuestion].answer)){
                alert('correct');
            }

        });
    }

    checkAnswer();

});