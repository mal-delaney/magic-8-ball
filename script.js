$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
	$("#answer").hide();
    magic8Ball.askAQuestion = function(question){
		//we'll display the triangle version of the 8 ball and fade in the answer over 4 seconds.
		//we'll pick a random list of answers.
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		$("#answer").fadeIn(4000);
        $("#answer").text( answer );
		//this just helped us debug so we knew we were getting a question and an answer. we would remove this before production.
		console.log(question);
        console.log(answer);
    };
	var onClick = function() {
		$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		$("#8ball").effect( "shake" );
//after 1/2 a second, the prompt will show the question.
 setTimeout(
       function() {
           //console.log("I wait .5 seconds, then show!")
           var question = prompt("Ask a yes or no question!"); 
	   magic8Ball.askAQuestion(question);
	   }, 500);
	};
	$("#questionButton").click( onClick );
});