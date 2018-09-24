//starting my quiz questions&answers
var quiz=[
{
	question: "Which country produces the most coffee?",
	options: ["Brazil", "Vietnam", "Colombia", "Guatemala"],
	correct: "Brazil"
},
{
	question: "How many kinds of coffee beans are there?",
	options: [2, 6, 12, 24],
	correct: 2 	
},
{
	question: "How many cups of coffee could kill a 150lb person?",
	options:[10, 20, 70, 100],
	correct: 70
},
{
	question: "Which country drinks the most coffee?",
	options: ["Finland", "USA", "Colombia", "UK"],
	correct: "Finland"
},
{
	question: "How much money does the average American spend on coffee each year?",
	options: ["100$", "200$", "500$", "1,000$"],
	correct: "1,000$"
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
	options: ["Caramel Frappuccino", "Pumpkin Spice Latte", "cold-brew coffee", "Vanilla Latte"],
	correct:"Vanilla Latte"
},
{
	question: "Does the person who made this quiz need a giant cup of coffee?",
	options: ["Yes", "No"],
	correct: "Yes"
}
];
function startQuiz(){
	document.getElementById("quizIntro").style.display="none";
	for (var i=0; i<quiz.length; i++){
		var questionArea="<div class='bg-dark text-light' id='question"+i+"'><p>"+ (i+1)+". "+ quiz[i].question+"</p></div><div class='pb-4'>";
			for (var j=0; j<quiz[i].options.length; j++){
				questionArea+="<label class='px-2'>"+quiz[i].options[j]+"<input id='answer"+i+"' name='"+quiz[i].question+"' type='radio' value='"+quiz[i].options[j]+"'></label>";
			}
			questionArea+="</div>";
		document.getElementById("quiz").innerHTML+=questionArea;
	}
	document.getElementById("submitquiz").style.display="initial";
}
	function checkQuiz() {
		document.getElementById("score").innerHTML="";
	for (var i=0; i<quiz.length; i++){
		var counter=0;
		var correctAnswer=quiz[i].correct;
		var userAnswer=document.getElementById("answer"+i);
		console.log(userAnswer);
		var question=document.getElementById("question"+i);
		if(userAnswer.checked && userAnswer.value==correctAnswer){
			question.classList.remove("text-light");
			question.classList.add("text-info");
		}else{
			question.classList.remove("text-light");
			question.classList.add("text-danger");
			counter=counter+1;
			}
		}
		document.getElementById("score").innerHTML = "<h1>You got " + counter + " questions wrong</h1>";
}