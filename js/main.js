var quiz = [
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
	document.getElementById("questions").style.display="block";
	for (var i = 0; i < quiz.length; i++) {
		var questionArea = "<span id='question" + i + "'>";
			questionArea += (i + 1) + ". " + quiz[i].question + "</span>";
			for (var j = 0; j < quiz[i].options.length; j++){
				questionArea += "<label>" + quiz[i].options[j];
				questionArea += "<input name='answer" + i + "' type='radio' value='" + quiz[i].options[j] + "'></label>";
			}
			document.getElementById("questions").innerHTML += questionArea;
	}
	var btn = document.createElement("div");
		btn.innerHTML = "<button class='btn btn-dark' onclick='checkQuiz();'>Submit Quiz</button>";
	document.getElementById("questions").appendChild(btn);
}
	function checkQuiz() {
		document.getElementById("results").innerHTML="";
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
			question.classList.remove("text-light", "text-danger");
			question.classList.add("text-info");
			correct++;
		} else {
			question.classList.remove("text-light");
			question.classList.add("text-danger");
		}
	}
		document.getElementById("results").style.display="block";
		document.getElementById("results").innerHTML = "<h1 class='animated bounce'>You got " + correct + " questions correct</h1>";
	}