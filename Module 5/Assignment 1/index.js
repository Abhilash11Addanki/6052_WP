var quiz = {
	"questions" : [{
	"question" : "Which is the first Internet search engine?",
	"option" : [
	{
	text : "Google",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "Archie",
	isCorrect : true,
	feedback : "Correct"
    },
    {
	text : "Altavista",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "WAIS",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "The option starts with letter A",
},
{
	"question" : "Who is making the Web standards?",
	"option" : [
	{
	text : "Mozilla",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "Microsoft",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "The World Wide Web Consortium",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "NVDIA",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "It is a famous web browser",
},
{
	"question" : "If you want to align text to the right side of an block element in a cascading style sheet (CSS) then which of the following property would you use?",
	"option" : [
	{
	text : "Right align",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "Justify",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Left align",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Text align",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "The answer is in the question itselves"
},
{
	"question" : "In a Javascript Application what function can be used to send messages to users requesting for an text input?",
	"option" : [
	{
	text : "Display()",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "Alert()",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "GetOutput()",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Prompt()",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "This function is used when we want to input text in javascript."
}
]
}
var i = 0
var j = 0
window.onload = function display() {
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    hideButton('Prev')
};
function radioclicked(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = code
	}
}
function radioclicked1(i,j) {
    if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = code
	}	
}
function prev() {
	i=i-2;
	if (i < 0) {
		i = 0;
		hidebutton('Prev')
		return;
	}
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == 0) hideButton('Prev')
}
function next() {
	i=i+2
	if (i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return
	}
	showButton('Next')
	showButton('Prev')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == quiz.questions.length - 2) hideButton('Next')
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function reset() {
	location.reload()
}