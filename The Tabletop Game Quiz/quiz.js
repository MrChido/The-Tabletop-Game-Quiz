/* Board Game questions 5
this needs to have a score, that gets updated
and it needs ranking
true false lower case for ease
diffrent games to be questioned about*/

/*starting with questions, then mvoing onto player answers and scores. correct answers +1, missed Scores -1 any negative numbers in result is reslut of 0*/
//starting score
var score = 0;
//questions
//question one:true
var marbles = prompt("Question One. T or F: In Potion Explosion, The Key Items are marbles?");
if(marbles==="true"){
  score += 1;
alert("Correct! Your score is " +score+ ". With four more questions to go.");
}else if(marbles==="false"){
score += 0;
alert("Incorrect. Your score is " +score+ ". With four more questions to go.");
}

//Question two:True
var deck = prompt('Question Two. T or F: In SmashUp, Each players deck is made of 2 "Factions"?');
if(deck === "true"){
  score += 1;
alert("Correct! Your score is " +score+ ". With three more questions to go.");
}
//question three: this one should be false
var eradication = prompt('Question Three. T or F: Virus eradication is the goal of standard pandemic?');
  if(eradication ==="false"){
    score += 1;
alert("Correct! Your score is " +score+ ". With two more questions to go.");}
//question four:False as well
var keepers = prompt('Question Four. T or F: In any Fluxx game, Keepers cannot be stolen?');
  if(keepers ==="false"){
    score += 1;
alert("Correct! Your score is " +score+ ". With one more questions to go.");
  }
//question five:False
var heroes = prompt('Question Five. Tor F: In boss monster, you are the wandering heroes?');
  if (heroes ==="false"){
    score += 1;
alert("Correct! Your score is " +score+ ". Continue to see your score."); }
//declaration of score alerts should be utilized

  if(score === 5){
  alert("With 5 victory points, you are the top player! Wed give you a gold crown, but there is no budget.");
  }else if(score=== 4 || score=== 3){
  alert("With "+ score + " victory points, you are awarded a silver spray-painted paper crown! Congrats!");
  }else if(score=== 2 || score=== 1){
  alert("With " +score+ " Victory points, you are awared a 'Bronze' Crown made from a Burger King to-go bag. Its pretty lame, we know. We're sorry.");
  }else{
  alert("We are begining to suspect that you may not know as much as you think you might about tabletop games. It's nothing to be ashamed about but as a consolation prize we do offer a web link for your beninfit.  https://boardgamegeek.com/wiki/page/Friendly_Local_Game_Stores_(FLGS)_of_the_USA");
  }
  
  