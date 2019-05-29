// Var wins : 
// var losses : 
// Var number between 19-120 : randomonly generated at page load an new game
// Crystals 1 - random number goes in 1-12 and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 2 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 3 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 4 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Your score  - when equal to the  var random number  win game, when passes var random number loss game
 
var wins=0;
var loss=0;
var box1Number=[];
var box2Number=[];
var box3Number=[];
var box4Number=[];
var tally=0;
var buckets=(Math.floor(Math.random()* 120))+1


$(document).ready(function(){

var basketball = $(".basketball");
var steph = $(".steph");
var leonard = $(".leonard");


$("#buckets").html("Get Buckets: " + buckets);

function endGame(){
    if (tally === buckets){
        tally=0;
        buckets=(Math.floor(Math.random()* 120))+1
        wins++
        $("#buckets").text("Get Buckets: " + buckets);
        $("#wins").text("Wins: " + wins);
        $("#score").text("Your Score: " + tally);
        alert (" you win !");
    }
    if(tally > buckets){
        tally=0;
        buckets=(Math.floor(Math.random()* 120))+1
        loss++
        $("#losses").text("Losses: " + loss);
        $("#buckets").text("Get Buckets: " + buckets);
        $("#score").text("Your Score: " + tally);
        alert (" you lose ! ");
     } 
}

// Button1 when clicked generates a number between 1-12
$(".basketball").on("click",function(){
    var boxoneguess = (Math.floor(Math.random()* 12)+1);
    box1Number.push(boxoneguess)
    tally += boxoneguess;
    $("#score").html("Your Score: " + tally);
    endGame();
})



// Button2 when clicked generates a number between 1-12
$(".steph").on("click",function(){
    var boxtwoguess =(Math.floor(Math.random()* 12)+1);
    box2Number.push(boxtwoguess);
    tally += boxtwoguess;
    $("#score").html("Your Score: " + tally);
    endGame(tally);
})


// Button3 when clicked generates a number between 1-12
$(".leonard").on("click",function(){
    var boxthreeguess =(Math.floor(Math.random()* 12))+1;
    tally += boxthreeguess;
    box3Number.push(boxthreeguess);
    $("#score").html("Your Score: " + tally);
    endGame();
})

// Button4 when clicked generates a number between 1-12
$(".klay").on("click",function(){
    var boxfourguess =1
    box4Number.push(boxfourguess);
    tally +=  1;
    $("#score").html("Your Score: " + tally);
    endGame();
})

$(".basketball").on("click", function() {
    basketball.animate({ top: "-=60px" }, "normal");
    basketball.animate({ left: "+=250px" }, "normal");
    basketball.animate({ top: "+=270px" }, "fast");
    basketball.animate({ left: "-=250px" }, "normal");
    basketball.animate({ top: "-=210px" }, "normal");

    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
  });

  $(".steph").on("click", function() {
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
    steph.animate({ left: "+=40px" }, "fast");
    steph.animate({ left: "-=40px" }, "fast");
  });

  $(".leonard").on("click", function() {
    leonard.animate({ top: "-=100px" }, "normal");
    leonard.animate({ top: "+=100px" }, "normal");
  });


})
