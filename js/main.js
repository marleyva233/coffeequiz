const quiz = [
{
	question: "Which country produces the most coffee?",
	options: ["Brazil", "Vietnam", "Colombia", "Guatemala"],
	correct: "Brazil"
},
{
	question: "How many kinds of coffee beans are there?",
	options: [2, 6, 12, 24],
	correct: "2" 	
},
{
	question: "How many cups of coffee can kill a 150lb person?",
	options:[10, 20, 70, 100],
	correct: "70"
},
{
	question: "Which country drinks the most coffee?",
	options: ["Finland", "USA", "Colombia", "UK"],
	correct: "Finland"
},
{
	question: "How many dollars does the average American spend on coffee each year?",
	options: [100, 200, 500, 1000],
	correct: "1000"
},
{
	question: "This country banned coffee and coffee paraphernalia in 1746. The King of this country also ordered convicted murderers to drink coffee as a death sentence.",
	options: ["France", "Sweden", "Germany", "Russia"],
	correct: "Sweden"
},
{
	question: "Is it true or false that you can wake up just from smelling coffee?",
	options: ["True", "False"],
	correct: "True"
},
{
	question: "Adding hot water to expresso makes what kind of coffee drink?",
	options: ["Red Eye", "Americano", "Flat-white", "Frappuccino"],
	correct: "Americano"
},
{
	question: "What is the most ordered drink at Starbucks?",
	options: ["Caramel Frappuccino", "Pumpkin Spice Latte", "Cold-Brew Coffee", "Vanilla Latte"],
	correct:"Vanilla Latte"
},
{
	question: "Does the person who made this quiz need a giant cup of coffee?",
	options: ["Yes", "No"],
	correct: "Yes"
}
];
function startQuiz() {
	document.getElementById("intro").style.display = "none";
	var questions = document.getElementById("questions");
		questions.style.display="block";
	for (var i = 0; i < quiz.length; i++) {
		   var questionArea = "<span id='question" + i + "'>";
			questionArea += (i + 1) + ". " + quiz[i].question + "</span>";
			for (var j = 0; j < quiz[i].options.length; j++){
				questionArea += "<label>" + quiz[i].options[j];
				questionArea += "<input name='answer" + i + "' type='radio' value='" + quiz[i].options[j] + "'></label>";
			}
			questions.innerHTML += questionArea;
	}
	var btn = document.createElement("div");
		btn.innerHTML = "<button class='btn btn-dark' onclick='checkQuiz();'>Submit Quiz</button>";
	questions.appendChild(btn);
}
	function checkQuiz() {
		var results = document.getElementById("results");
			results.innerHTML = "";
		var correct = 0;
		for (var j = 0; j < quiz.length; j++){
			var userAnswer = document.getElementsByName("answer" + j)
			var answerValue;
		for (var i = 0; i < userAnswer.length; i++){
			if (userAnswer[i].checked)
				answerValue = userAnswer[i].value;
		}
		var question = document.getElementById("question" + j);
		var correctAnswer = quiz[j].correct;
		if (answerValue == correctAnswer){
			question.classList.remove("wrong");
			correct++;
		} else {
			question.classList.add("wrong");
		}
	}
		results.style.display = "block";
		results.innerHTML = "<h1 class='animated bounce'>You got " + correct + " questions correct</h1>";
	}