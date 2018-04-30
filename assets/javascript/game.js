$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

$("#randomNumber").text(Random);

   // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
//  Declaring variables for tallies
  var userScore= 0; 
  var wins= 0;
  var losses = 0;

$("#numberOfWins").text(wins);
$("#numberOfLosses").text(losses);

//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      
      $("#randomNumber").text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userScore= 0;
      $("#finalScore").text(userScore);
      } 
      
//adds the wins to the userScore
function winner(){
alert("You won!");
  wins++; 
  $("#numberOfWins").text(wins);
  reset();
}

//addes the losses to the userScore
function loser(){
alert ("You lose!");
  losses++;
  $("#numberOfLosses").text(losses);
  reset()
}

//sets up click for jewels CLICKS WORK, BUT NOT DISPLAYING cumulative or fianl score
  $("#purple").on ("click", function(){
    userScore = userScore + num1;
    $("#finalScore").text(userScore); 

//sets win/lose conditions
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        }   
        })  
  $("#yellow").on ("click", function(){
    userScore = userScore + num2;
    $("#finalScore").text(userScore); 
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        } 
        })  
  $("#green").on ("click", function(){
    userScore = userScore + num3;
    $("#finalScore").text(userScore);
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        } 
        })  
  $("#blue").on ("click", function(){
    userScore = userScore + num4;
    $("#finalScore").text(userScore); 
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        }
        });   
});
