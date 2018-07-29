//starting my quiz questions&answers
var quiz=[
{
	question: "Which country produces the most coffee?",
	correct: "brazil",
},
{
	question: "How many kinds of coffee beans are there?",
	correct:"two" ,	
},
{
	question: "How many cups of coffee does it take to kill a 150lb person?",
	correct: "seventy",
},
{
	question: "Which country drinks the most coffee?",
	correct: "finland"
},
{
	question: "How much money does the average American spend on coffee each year?",
	correct: "one thousand dollars"	
},
{
	question: "This country banned coffee and coffee paraphernalia in 1746. The King of this country also ordered convicted murderers to drink coffee as a death sentence.",
	correct: "sweden"
},
{
	question: "Is it true or false that you can wake up just from smelling coffee?",
	correct: "true"
},
{
	question: "Adding hot water to expresso makes what kind of coffee drink?",
	correct: "americano"
},
{
	question: "What is the most ordered drink at Starbucks?",
	correct:"vanilla latte"
},
{
	question: "Does the person who made this quiz need a giant cup of coffee?",
	correct: "yes"
}
];

// ending questions and answers

// to give the questions some content i am going to use a for loop

function startQuiz(){
		
		document.getElementById("quizIntro").style.display="none";

	for (var i=0; i<quiz.length; i++){
		 var newQuestion = '<div class="form-group"><div class="text-justify" id="question'+i+'">' + quiz[i].question;
             newQuestion += '</div><input class="form-control" id="answer' + i + '"></div>';
             document.getElementById("quiz").innerHTML += newQuestion;
	}
	document.getElementById("submitquiz").style.display="initial";
}

function checkQuiz() {
        	var incorrectCounter = 0;

        	for(var i = 0; i < quiz.length; i++) {
        
        		var correctAnswer = quiz[i].correct;
        		var answerID = "answer" + i;
        		var userAnswer = document.getElementById(answerID).value.toLowerCase();

        		if (correctAnswer == userAnswer) {
        			// adding a class of "correct" to the question element if it's guessed
        			//correctly
        			document.getElementById(answerID).className = "form-control";
        		} else {
        			// add a class of "incorrect" if guessed wrong
        			document.getElementById("question"+[i]).className = "incorrect";
        			incorrectCounter++;
        		}
        	}
            // display the quiz result
            document.getElementById("score").innerHTML = "<h1>You got " + incorrectCounter + " questions wrong</h1>";
        }

