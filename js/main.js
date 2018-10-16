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
function startQuiz(){
	document.getElementById("quizIntro").style.display="none";
	for (var i=0; i<quiz.length; i++){
		var questionArea="<div class='bg-dark text-light' id='question"+i+"'><p>"+ (i+1)+". "+ quiz[i].question+"</p></div><div class='pb-4'>";
			for (var j=0; j<quiz[i].options.length; j++){
				questionArea+="<label class='px-2'>"+quiz[i].options[j]+"<input name='answer"+i+"' type='radio' value='"+quiz[i].options[j]+"'></label>";
			}
			questionArea+="</div>";
		document.getElementById("quiz").innerHTML+=questionArea;
	}
	document.getElementById("submitquiz").style.display="initial";
}
	function checkQuiz() {
		document.getElementById("score").innerHTML="";
		var correct=0;
		var incorrect=0;
		for (var j=0; j<quiz.length; j++){
			var userAnswer=document.getElementsByName("answer"+j)
			var answerValue;
		for (var i=0; i<userAnswer.length; i++){
			if(userAnswer[i].checked)
				answerValue=userAnswer[i].value;
		}
		var question=document.getElementById("question"+j);
		var correctAnswer=quiz[j].correct;
		if(answerValue==correctAnswer){
			question.classList.remove("text-light", "text-danger");
			question.classList.add("text-info");
			correct++
		}else{
			question.classList.remove("text-light");
			question.classList.add("text-danger");
			incorrect++
		}
		console.log("user answer:"+answerValue);
		console.log("correct:"+ correct);
		console.log("incorrect:"+incorrect);
		console.log("correct:"+correctAnswer);
	}
		document.getElementById("score").innerHTML = "<h1 class='animated bounce'>You got " + correct + " questions correct</h1>";
	}
