$(document).ready(function() {

    $('#addInitials').hide();
    
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

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    $('#startButton').on('click', function(){
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#timer');
        startTimer(fiveMinutes, display);
    });

    var quizOptions = function(){
        for (var i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
            $('#quizOptions').append(`<ul style="list-style-type:none;""><li><button class="btn btn-dark" value="${quizQuestions[currentQuestion].options[i]}" id="option"> ${quizQuestions[currentQuestion].options[i]} </button></li></ul>`);
        }
    }

    var startQuiz = function(){
        $('#startButton').on('click', function(){
            currentQuestion = 0;
            score = 0;
            $('#quizQuestions').html(quizQuestions[currentQuestion].question);
            quizOptions();
        });
    }

    var addInitials= function(){
        var leaderBoard = [];
        var localInitials = localStorage.getItem('initials', initials)
        if (localInitials !== null) {
            leaderBoard = localInitials.split(',')
            for (var localInitials of leaderBoard) {
            $('#leaderBoard').append(localInitials + 'score: ' + score);
            }
        }
        var initials = $('#initials').val();
        leaderBoard.push(initials);
        $('#leaderBoard').append(`
            <div class = "input-group mb-6">
            </div>
            <input type="text" placeholder="add your initials" value='${initials} Score:${score}' aria-describedby='basic-addon1' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            </div>
        `);
        $('#addInitials').hide();
        localStorage.setItem('initials', initials);
        
    }

    var leaderBoard = function(){
        $('#addBtn').on('click', function(){
            $('#addInitials').show();
            addInitials();

        });
    }
     
    
    var nextQuestion = function(){
        $(document).on('click','#option',function(){
            if (currentQuestion < 9){
                currentQuestion++;
                $('#quizQuestions').html(quizQuestions[currentQuestion].question);
                $('#quizOptions').empty();
                quizOptions();
            } else {
                $('#quizQuestions').html('You completed the quiz. <br> You scored ' + score + ' out of 10. <br> Add your initials to the scoreboard<br><br>');
                $('#quizOptions').empty();
                $('#scoreTracker').empty();
                $('#startButton').hide();
                $('#addInitials').show();
                leaderBoard();
            }
        });
    }


    var checkAnswer = function(){
        $(document).on('click','#option',function(){
        var userChoice = $(this).val();
        if (userChoice === (quizQuestions[currentQuestion].answer)){
            score++
            localStorage.setItem('score', score)
            $('#scoreTracker').html('Correct!');
        } else {
            $('#scoreTracker').html('Incorrect!');
        }
        });
    }



   startQuiz();
   checkAnswer();
   nextQuestion();
   




});