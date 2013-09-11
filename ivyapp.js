

var text = '';

//Current Question Variable 
var current = 0;

//Score Variable
var score = 0;



//$("#userscore").text(score);



//Create Object to Store Questions, Options, and Answers 

var questions = [{

    "answer": "b",

    "question": "What is your opinion of the EPA?",

    "options": ["Vital. Helps keep the Earth clean.", "What's the EPA?", "It should be abolished."]

}, {

    "answer": "b",

    "question": "What are your thoughts on Car Pooling?",

    "options": ["Car pooling is great.", "I don't know. I might consider it.", "I like being in my own car by myself."]

}, {

    "answer": "c",

    "question": "What type of food are you more inclined to buy?",

    "options": ["Organic", "Whatever's available","Inorganic"]
}, {
	
	"answer": "a",
	
	"question": "How much of your home is lit by energy efficient light-bulbs?",
	
	"options": ["All","Part","None"]
	
}, { 
   "answer": "a",
   
   "question": "What do you think when you hear 'Global Warming'?",
   
   "options": ["We're all in danger of its effects.", "Doesn't effect me, who cares?", "It's a hoax!"]
   
}, {
	"answer": "a",
	
	"question": "What do you do with old/dead batteries",
	
	"options": ["Give them a recycling center.", "Throw them into your recycling bin.", "Toss them in the trash."]

},	{ 
   "answer": "a",
   
   "question": "What do you find most relaxing?",
   
   "options": ["Gardening", "Excercising", "Watching TV"]
   
   
},	{ 
   "answer": "a",
   
   "question": "Do you encourage others to be green?",
   
   "options": ["Yes, I do.", "I do sometimes.", "No, I don't."]


},  { 
   "answer": "a",
   
   "question": "How long do your showers normally last?",
   
   "options": ["Under five minutes. Quick but thorough.", "No more than 10 minutes.", "I love to relax and take my time."]

 
},	{ 
   "answer": "a",
   
   "question": "When you leave your house you...?",
   
   "options": ["Make sure everything I'm not using is off.", "If it's in reach, I'll turn it off.", "Rush out the door and leave most things on."]
   
}];



$(".answer1").wrap('<span class="answertext" />');


//Make the Questions Appear 

for (i = 0; i < questions.length; i++) {
   
    if (i == current) //If Current Question is on Screen 

    {

        vis = "show";

        //Add the Options

        var o1 = questions[i]["options"][0];

        var o2 = questions[i]["options"][1];

        var o3 = questions[i]["options"][2];	

    }

 }

	//Add 1st Question to Brown Container 

 text = "<li>" + questions[current]["question"] + "</li>";



//Display Options in Options Container

$(".answer1").text(o1);

$(".answer2").text(o2);

$(".answer3").text(o3);

$("#questionblock").html(text);



//event handler for answer buttons

$(".answer1").click(function(e) {
score += 20;
}); 

$(".answer2").click(function(e) {
score += 10;
}); 

$(".answer3").click(function(e) {
score += 0;
}); 

$(".answer1, .answer2, .answer3").click(function(e) {

	current++;

    

     //Add the Options

      var o1 = questions[current]["options"][0];

      var o2 = questions[current]["options"][1];

      var o3 = questions[current]["options"][2];

    



	//Display Options in Options Container

	$(".answer1").text(o1);

	$(".answer2").text(o2);

	$(".answer3").text(o3);

	$("#questionblock").html(text);

	



	//score += 20;

    $("#userscore").text(score);



	//Add Question to Brown Container 

 text = "<li>" + questions[current]["question"] + "</li>";

$("#questionblock").html(text);

//Call Results Function   
if(current === 9) {
myResults();
};

});


//Quiz Results Function
function myResults() {

    if (score >= 100) {

        window.location = "ecowarrior.html"; 

    } else if (score >= 80) {

        window.location = "greenfriendly.html";

    } else {

        window.location = "antigreen.html";

    };
};








/*function restults() {

    //Points

    var playersPoints; //example number 

    var ecoWarrior = 20;

    var greenFriendly = 10;

    var antiGreen = 0;

    //If statements 

    if (playersPoints >= 40) {

        alert("Eco Warrior");

    } else if (playersPoints > 20) {

        alert("Green Friendly");

    } else {

        alert("Anti Green");

    }

}*/







//Create function to ask Question 



function askQuestion(question) {

    var answer = prompt(question["answer"], ''); //Store the answer given 

    alert(answer);

}















//create two arrays. create an array with different values. array with numbers (5,0,2,6, 3, 4,1). use that array to determine the order.