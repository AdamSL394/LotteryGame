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
var box4Number=[];
var tally=0;
var buckets=[(Math.floor(Math.random()* 120))+1]
console.log(buckets)
$(document).ready(function(){


$("#score").html(tally);
$("#buckets").html("Get Buckets: " + buckets);



// Button1 when clicked generates a number between 1-12
$(".basketball").on("click",function(){
var boxoneguess = [(Math.floor(Math.random()* 12))+1];
box1Number.push(boxoneguess)
tally +=  + boxoneguess;
console.log(tally);
console.log(boxoneguess);
$("#score").html(tally);
// $("#score").text(box1Number);
})
// Button2 when clicked generates a number between 1-12
$(".steph").on("click",function(){
    var boxtwoguess =[(Math.floor(Math.random()* 12))+1];
    box2Number.push(boxtwoguess);
    tally +=  + boxtwoguess;
    console.log(tally);
    console.log(boxtwoguess);
    $("#score").html(tally);
    // $("#score").text(boxtwoguess);
})


// Button3 when clicked generates a number between 1-12
$(".leonard").on("click",function(){
    var boxthreeguess =[(Math.floor(Math.random()* 12))+1];
    tally +=  + boxthreeguess;
    box3Number.push(boxthreeguess);
    // $("#score").text(boxthreeguess);
})

// Button4 when clicked generates a number between 1-12
$(".klay").on("click",function(){
    var boxfourguess =[(Math.floor(Math.random()* 12))+1];
    box4Number.push(boxfourguess);
    // $("#score").text(boxfourguess);
})



// console.log(boxoneguess); 
// console.log(boxtwoguess);

})
