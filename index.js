var readlineSync = require("readline-sync"); //this package is required to take input from user

var chalk = require("chalk"); //this package is required to do text styling

var userName = readlineSync.question("What's your name? ");

var score = 0;
console.log("Welcome " + chalk.black.bgWhite.bold(userName) + " to " +chalk.cyan.bgWhite.bold("HOW WELL YOU KNOW Souvik? \n")); console.log("----------------Let's Start the quiz-------------------");

// play function
function play(question, answer){
    var userAnswer = readlineSync.question(question);

    //checking the answer given by user correct or not
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bgGray.bold("Right!"));
    score += 2;
    }
    else
    console.log(chalk.red.bgGray.bold("Wrong!"));

    //score after answering each question
    console.log(chalk.blue.bgWhite.bold("Current Score:"), score);
    console.log("----------------------");  
}

//Highest Scores - array of objects
var highest = [{
  name: "Souvik",
  score: 10
}, {
  name: "Family",
  score: 8 
}, {
  name: "Abhijit",
  score: 6
}]

//Array of Objects - which contains questions and answers for the quiz game
var questions = [{
  question: "Where does Souvik live? ",
  answer: "Kharagpur"
}, {
  question: "What is Souvik's favourite color? ",
  answer: "Blue"
}, {
  question: "Who is Souvik's favourite superhero? ",
  answer: "Ironman"
}, {
  question: "In which year Souvik got his 1st smartphone? ",
  answer: "2017"
}, {
  question: "How many languages does Souvik know ? ",
  answer: "4"
}];

//calling play functions for each question and answer
for(var i = 0; i < questions.length; i++)
{
    var currentQuestion = questions[i];
    play(chalk.black.bgCyan.bold(currentQuestion.question), currentQuestion.answer);
}

console.log("YAY! you SCORED: ", score); //to show final score

//to print and check whether user beaten high scorer
var hasBeaten = false;
var rank = 0;
console.log("***********Top Players************");
for(var i = 0; i < highest.length; i++)
{
    var currentHighestScorer = highest[i];
    console.log("Name: ", currentHighestScorer.name);
    console.log("Score: ", currentHighestScorer.score);
    if(score >= currentHighestScorer.score && !hasBeaten)
    {
    rank = i + 1;
    hasBeaten = true;    
    }
}

//if user has scored >= score of one of the top 3 players then it will show a message with rank among top 3
if(hasBeaten)
    console.log("******Congrats! You have beaten one of the top players in the game, Current Rank : " + rank + " ********");
