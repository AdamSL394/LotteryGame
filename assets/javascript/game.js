// Var wins : 
// var losses : 
// Var number between 19-120 : randomonly generated at page load an new game
// Crystals 1 - random number goes in 1-12 and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 2 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 3 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 4 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Your score  - when equal to the  var random number  win game, when passes var random number loss game
 
var win=0;
var loss=0;
var box1Number=[];
var box2Number=[];
var box3Number=[];
// var computerChoice4=[]
var tally=[];

$(document).ready(function(){


// Button1 when clicked generates a number between 1-12
$("#one").on("click",function(){
var boxoneguess = [(Math.floor(Math.random()* 12))+1];
box1Number.push(boxoneguess);
$("#score").text(box1Number);
})

// Button2 when clicked generates a number between 1-12
$("#two").on("click",function(){
    var boxtwoguess =[(Math.floor(Math.random()* 12))+1];
    box2Number.push(boxtwoguess);
    console.log(boxtwoguess);
    $("#score").text(boxtwoguess);
})
// Button3 when clicked generates a number between 1-12
$("#three").on("click",function(){
    var boxthreeguess =[(Math.floor(Math.random()* 12))+1];
    box3Number.push(boxthreeguess);
    $("#score").text(boxthreeguess);
})

//     // Button4 when clicked generates a number between 1-12
// $("#four").on("click",function(){
//     var computerGuess =[(Math.floor(Math.random()* 12))+1];
//     computerChoice4.push(computerGuess);
// })



console.log(box1Number); 
// console.log(boxoneguess); 
// console.log(boxtwoguess);

})

