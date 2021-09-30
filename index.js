var readlineSync=require("readline-sync")
// var readlineSync = require("readline-sync")

var score=0

var username=readlineSync.question("Heyy!! What's your name? ")
console.log("So, Hiiii "+username+"!!!")

// highest score
var highScore=[
  {
    name:"Kum Somi",
    score:"8",
  },
  {
    name:"Lokesh",
    score:"7",
  },
]


function play(question, answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {
    score=score+1
    console.log("Yaaay!! You are right.")
    console.log("your current score is: "+ score)
  }
  else{
    console.log("Sorry!! You are wrong. Correct answer is '"+ answer+"'")
    console.log("your current score is still "+ score)
  }
  
  console.log("-------------------------------------------")
}


var knowme=readlineSync.question("Do you like Pokemon?(y/n) ")

if (knowme.toLowerCase()==="y"){
  console.log("Yaaayy!! You said yes.")
  console.log("So let's play this 'Pokemon fandom' game!!!")
  console.log("------------------------------------------")
  console.log("Just type the Correct option(a,b,c)")
  console.log()
  var questions = [{
    question:"Which is the first Pokémon in the Pokédex? \n a) Bulbasaur \n b) Venusaur \n c) Mew\n",
    answer:"a",
    },
    {
      question:"Who are the starter Pokémon from the Kanto region? \n a)Bulbasaur, Pikachu & Cyndaquil \n b) Charmander, Squirtle & Bulbasaur \n c) Charmander, Pikachu & Chikorita\n",
      answer:"b",
    },
    {
      question:"How old is Ash? \n a)9 \n b)10 \n c)12\n",
      answer:"b",
    },
    {
      question: "What Pokémon type is Pikachu?\n a) Mouse \n b) Fire \n c) Electric\n",
      answer:"c",
    },

    {
      question:"Who is Ash’s starter Pokémon?\n a) Jigglypuff \n b) Charizard \n c) Pikachu\n",
      answer:"c",
    },
    {
      question:"Who are in Team Rocket?\n a) Jessie, James & Pikachu\n b) Jessie, James & Meowth\n c) Jessie, James & Ash\n",
      answer:"b",
    },
    {
      question: "Who is the Team Rocket Boss?\n a) Giovanni \n b) Jessie \n c) Meowth \n",
      answer:"a",
    },
    {
      question: "Which Pokémon was created through genetic manipulation?\n a) Mew\n b) Mewtwo\n c) Tasmanian Devil\n",
      answer:"b",
    }
  ]
  for(var i=0; i<questions.length;i++)
  {
    var currentQuestion=questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
  console.log("------------That's the the END-------------")
  console.log("--------------------------------------------")
  console.log()
  console.log("YOU DID A GREAT JOB")
  console.log("Highest Scores are as follows---->")
  for(var i=0;i<highScore.length;i++)
  {
    console.log(highScore[i].name+ " : " +highScore[i].score)
  }
}
else if (knowme.toLowerCase()==="n") {
  console.log("Sorry!! We can't play this 'Pokemon fandom' game as you don't like it.")
}
else{
  console.log("Please enter y/n for yes/no. Run again.")
}
