var currentQuestion = null;
var questionIndex = 0; 
var text = ''; 
var vis = ''; //visible variable
var current = [0]; //current q/a 


//Create Object to Store Questions, Options, and Answers 
var questions = [

	{
		"answer": "b",
		"question": "What is your opinion of the EPA?",
		"options": ["Vital. Helps keep the Earth clean", "What's the EPA?", "It should be abolished"] 
		
	}, 
	
	{
		"answer": "b",
		"question": "What are your thoughts on Car Pooling?",
		"options": ["I like being in my own car by myself.", "Car pooling is great.", "I don't know. I might consider it."] 
	},
	
	{
		"answer": "c",
		"question": "What type of food are you more inclined to buy?",
		"options": ["Inorganic", "Organic", "Whatever's available"] 
	}
];

$(".answer1").wrap('<span class="answertext" />');

//Make the Questions Appear 

for(i=0; i<questions.length; i++) 
{
	if(i == current) //If Current Question is on Screen 
	{
		vis = "show";
		//Add the Options
		var o1 = questions[i]["options"][0];
		var o2 = questions[i]["options"][1];
		var o3 = questions[i]["options"][2];
	} 
	else 
	{ 
	    //Hide the other Questions 
		/*vis = "hide"; */
	}
	
	//Add Question to Brown Container 
	text += "<li class='"+ vis +"'>" + questions[current]["question"] + "</li>";



}


//Display Options in Options Container
	$(".answer1").text(o1);
	$(".answer2").text(o2);
	$(".answer3").text(o3);
	$("#questionblock").html(text); 


//Add Points to Score

var score=0;
$("#userscore").text(score);


//1
$(".answer1").click(function() {

score = score+20; ;
$("#userscore").text(score);

/*if(score >= 40) {
window.location = "endscreen.html";
} else if(score >= 20) {
window.location = "http://www.p8i.com";
} else {
window.location = "http://www.yahoo.com";
}*/
});

function myResults() {

if(score >= 40) {
window.location = "endscreen.html";
} else if(score >= 20) {
window.location = "http://www.p8i.com";
} else {
window.location = "http://www.yahoo.com";
};

};




//2
$(".answer2").click(function() {

score = score+10; ;
$("#userscore").text(score);

/*if(score === 100) {
window.location = "endscreen.html";
}*/

});


//3
$(".answer3").click(function() {

score = score+0; ;
$("#userscore").text(score);

/*if(score === 100) {
window.location = "endscreen.html";
}*/

});

    //Option 1 Function
	$(".answer1").click(function(){
		current++; //increments current questions and answers 
		
		for(i=0; i<questions.length; i++) //loops through questions 
		{
			if(i == current) //current question
			{
				vis = "show";
				var o1 = questions[i]["options"][0]; //questions is the array, //i represents the first item in array, //options is nested inside questions array, //[0] represents the order
				var o2 = questions[i]["options"][1]; 
				var o3 = questions[i]["options"][2];
				
			} 
			else 
			{ 
				vis = "hide"; 
			}
			
			
			//display answers in answers containers 
				$(".answer1").html(o1);
				$(".answer2").html(o2);
				$(".answer3").html(o3);
				
		}
			
	});
	
	
	
	
	//Option 2 Function
	$(".answer2").click(function(){
		current++; //increments current questions and answers 
		
		for(i=0; i<questions.length; i++) //loops through questions 
		{
			if(i == current) //current question
			{
				vis = "show";
				var o1 = questions[i]["options"][0]; //questions is the array, //i represents the first item in array, //options is nested inside questions array, //[0] represents the order
				var o2 = questions[i]["options"][1]; 
				var o3 = questions[i]["options"][2];
				
			} 
			else 
			{ 
				vis = "hide"; 
			}
			
			
			//display answers in answers containers 
				$(".answer1").html(o1);
				$(".answer2").html(o2);
				$(".answer3").html(o3);
				
		}
	});
	
	
	
	
	//Option 3 Function
	$(".answer3").click(function(){
		current++; //increments current questions and answers 
		
		for(i=0; i<questions.length; i++) //loops through questions 
		{
			if(i == current) //current question
			{
				vis = "show";
				var o1 = questions[i]["options"][0]; //questions is the array, //i represents the first item in array, //options is nested inside questions array, //[0] represents the order
				var o2 = questions[i]["options"][1]; 
				var o3 = questions[i]["options"][2];
				
			} 
			else 
			{ 
				vis = "hide"; 
			}
			
			
			//display answers in answers containers 
				$(".answer1").html(o1);
				$(".answer2").html(o2);
				$(".answer3").html(o3);
				
		}
	});
	



function restults() 
{
	//Points
	
	var playersPoints; //example number 
	var ecoWarrior = 20;
	var greenFriendly = 10;
	var antiGreen = 0;
	
	//If statements 
	
	if(playersPoints >= 40)
	{
		alert("Eco Warrior"); 
	} 
	else if(playersPoints > 20) 
	{
	 	alert("Green Friendly");   
	} 
	else 
	{
	 	alert("Anti Green");   
	}
}


//Create function to ask Question 

function askQuestion(question) {
var answer = prompt(question["answer"],''); //Store the answer given 

alert(answer); 
}








//create two arrays. create an array with different values. array with numbers (5,0,2,6, 3, 4,1). use that array to determine the order.